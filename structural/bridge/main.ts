// Implementor class
interface Theme
{
    background(): string;
    foreground(): string;
    lineColor(): string;
    fontColor(): string;
    altFontColor(): string;
}

// Abstraction class: UI Object:
abstract class UIObject
{
    theme: Theme;

    constructor(theme: Theme)
    {
        this.theme = theme;
    }

    public abstract draw(): void;

}

// Theme 1: Light Mode:
class LightMode implements Theme
{
    background(): string { return "#ffffff"; }
    foreground(): string { return "#aaaaaa"; }
    lineColor(): string { return "#0c60cd"; }
    fontColor(): string { return "#222222"; }
    altFontColor(): string { return "#000000"; }
}

// Theme 2: Dark Mode:
class DarkMode implements Theme
{
    background(): string { return "#111111"; }
    foreground(): string { return "#2d2d2d"; }
    lineColor(): string { return "#0c60cd"; }
    fontColor(): string { return "#dfdfdf"; }
    altFontColor(): string { return "#efefef"; }
}

// UI Object 1: a Button:
class UIButton extends UIObject
{
    constructor(theme: Theme)
    {
        super(theme);
    }

    public draw()
    {
        console.log("Drawing a button on the screen.");
        console.log("\tText Color: " + this.theme.fontColor());
        console.log("\tButton Color: " + this.theme.background());
        console.log("\tHighlight Text Color: " + this.theme.altFontColor());
    }

}

// UI Object 2: a Graph:
class UIGraph extends UIObject
{
    constructor(theme: Theme)
    {
        super(theme);
    }

    public draw()
    {
        console.log("Drawing a graph on the screen.");
        console.log("\tMain Text Color: " + this.theme.fontColor());
        console.log("\tLine Color: " + this.theme.lineColor());
        console.log("\tAxis Text Color: " + this.theme.altFontColor());
        console.log("\tGraph Background Color: " + this.theme.foreground());
    }
}

// Create the themes:
const light = new LightMode();
const dark = new DarkMode();

// Create the UI Objects:
const button = new UIButton(light);
const graph = new UIGraph(dark);

// Draw the objects:
button.draw();
graph.draw();