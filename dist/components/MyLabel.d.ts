import "./mylabel.css";
export interface MyLabelProps {
    /**
     * The text content of the label.
     */
    label: string;
    /**
     * The font size to be used. The default value is 'normal'.
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * If true the label is set to uppercase.
     */
    allCaps?: boolean;
    /**
     * Predefined font color to be used in the text content of the label.
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * The font color to be used in the text content of the label, overwrites color
     */
    fontColor?: string;
    /**
     * The color of the backgrounf to be used in the label.
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, backgroundColor, }: MyLabelProps) => JSX.Element;
