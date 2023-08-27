import Markdown from "markdown-to-jsx";
import { CSSProperties, ReactNode } from "react";

export interface Props {
    children: string;
    style?: CSSProperties;
    clazz?: string;
}

export default function TrimmedMarkdown(model: Props) {
    console.log("TrimmedMarkdown", model.children.props.value)
    return (
        <Markdown className={model.clazz} style={model.style}>{ model.children }</Markdown>
    );
}