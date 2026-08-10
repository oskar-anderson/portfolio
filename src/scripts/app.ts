import { computePosition, offset, shift } from '@floating-ui/dom'
import "./pixel-canvas.js";

function addTooltipPositioning() {
    let mousePos = document.querySelector('#mouse-position') as any;
    let tooltipEl = document.querySelector('#tooltip') as any;
    // Track the content currently shown so we only rebuild when it actually
    // changes. Rebuilding on every mousemove recreated the <img>, collapsing the
    // tooltip height for a frame and making floating-ui place it wrong (the flash).
    let currentContent: string | null = null;

    const hide = () => {
        currentContent = null;
        tooltipEl.style.visibility = "hidden";
        tooltipEl.innerHTML = "";
    };
    hide();

    document.addEventListener('mousemove', (e) => {
        mousePos.style.position = "absolute";
        mousePos.style.top = e.pageY + "px";
        mousePos.style.left = e.pageX + "px";

        let targetElement = e.target as any;
        let content: string | undefined;
        while (targetElement && targetElement.isConnected && targetElement !== document.body) {
            const c = targetElement.dataset && targetElement.dataset.tooltipContent;
            if (c) { content = c; break; }
            targetElement = targetElement.parentNode;
        }

        if (!content) {
            if (currentContent !== null) hide();
            return;
        }

        if (content !== currentContent) {
            currentContent = content;
            if (content.endsWith('.png') || content.endsWith('.jpg')) {
                // Keep hidden (but laid out) until the image has real dimensions,
                // then position and reveal — so it never renders against a
                // collapsed/zero height box.
                tooltipEl.style.visibility = "hidden";
                tooltipEl.innerHTML = `<img class="w-full" src="${content}">`;
                const img = tooltipEl.querySelector('img') as HTMLImageElement;
                const reveal = () => updatePosition(mousePos, tooltipEl)
                    .then(() => { tooltipEl.style.visibility = "visible"; });
                if (img.complete && img.naturalHeight > 0) reveal();
                else img.addEventListener('load', reveal, { once: true });
            } else {
                tooltipEl.innerHTML = content;
                tooltipEl.style.visibility = "visible";
            }
        }

        // Content is stable and correctly sized — just follow the cursor.
        if (tooltipEl.style.visibility === "visible") updatePosition(mousePos, tooltipEl);
    })
}

function updatePosition(relative: HTMLElement, floater: HTMLElement) {
    return computePosition(relative, floater, {
        placement: 'top-start',
        middleware: [ offset({ mainAxis: 20, crossAxis: 30 }), shift({ padding: 4}) ]
    }).then(({x, y, middlewareData}) => {
        Object.assign(floater.style, {
            position: `absolute`,
            left: `${x}px`,
            top: `${y}px`,
        })
    })
}

addTooltipPositioning()


