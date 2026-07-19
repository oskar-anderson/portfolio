import { computePosition, offset, shift } from '@floating-ui/dom'
import "./pixel-canvas.js";

function addTooltipPositioning() {
    let mousePos = document.querySelector('#mouse-position') as any;
    let tooltipEl = document.querySelector('#tooltip') as any;
    document.addEventListener('mousemove', (e) => {
        mousePos.style.top = e.pageY + "px";
        mousePos.style.left = e.pageX + "px";
        mousePos.style.position = "absolute";
        let targetElement = e.target  as any;
        updatePosition(mousePos, tooltipEl)
        while (targetElement && targetElement.isConnected && targetElement !== document) {
            tooltipEl.innerHTML = "";
            let tooltipContent = targetElement.dataset.tooltipContent;
            if (tooltipContent) {
                if (tooltipContent.endsWith('.png') || tooltipContent.endsWith('.jpg')) {
                    tooltipEl.innerHTML = `<img class="w-full" src="${tooltipContent}">`;
                    break;
                }
                tooltipEl.innerHTML = targetElement.dataset.tooltipContent;
                break;
            }
            targetElement = targetElement.parentNode;
        }
    })
}

function updatePosition(relative: HTMLElement, floater: HTMLElement) {
    computePosition(relative, floater, {
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


