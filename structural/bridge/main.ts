// Implementor class
interface Theme
{
  getbackground(): string;
  getforeground(): string;
  getlineColor(): string;
  getfontColor(): string;
  getaltFontColor(): string;
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
   getbackground(): string { return "#ffffff"; }
   getforeground(): string { return "#aaaaaa"; }
   getlineColor(): string { return "#0c60cd"; }
   getfontColor(): string { return "#222222"; }
   getaltFontColor(): string { return "#000000"; }
}

// Theme 2: Dark Mode:
class DarkMode implements Theme
{
    getbackground(): string { return "#111111"; }
    getforeground(): string { return "#2d2d2d"; }
    getlineColor(): string { return "#0c60cd"; }
    getfontColor(): string { return "#dfdfdf"; }
    getaltFontColor(): string { return "#efefef"; }
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
        console.log("\tText Color: " + this.theme.getfontColor());
        console.log("\tButton Color: " + this.theme.getbackground());
        console.log("\tHighlight Text Color: " + this.theme.getaltFontColor());
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
        console.log("\tMain Text Color: " + this.theme.getfontColor());
        console.log("\tLine Color: " + this.theme.getlineColor());
        console.log("\tAxis Text Color: " + this.theme.getaltFontColor());
        console.log("\tGraph Background Color: " + this.theme.getforeground());
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