
export default class Navigation{
    private home: HTMLElement | null;
    private about: HTMLElement | null;
    private projects: HTMLElement | null;

    private btnHome: HTMLElement | null;
    private btnAbout: HTMLElement | null;
    private btnProjects: HTMLElement | null;

    constructor() {
        this.home = document.getElementById('home');
        this.about = document.getElementById('about');
        this.projects = document.getElementById('projects');

        this.btnHome = document.getElementById('btnHome');
        this.btnAbout = document.getElementById('btnAbout');
        this.btnProjects = document.getElementById('btnProjects');
    }

    create_button_listeners() {
        this.btnHome!.addEventListener("click", (_:Event) => {
            this.home!.style.display = "block";
            this.about!.style.display = "none";
            this.projects!.style.display = "none";
        });

        this.btnAbout!.addEventListener("click", (_:Event) => {
            this.home!.style.display = "none";
            this.about!.style.display = "block";
            this.projects!.style.display = "none";
        })

        this.btnProjects!.addEventListener("click", (_:Event) => {
            this.home!.style.display = "none";
            this.about!.style.display = "none";
            this.projects!.style.display = "block";
        })
    }
}