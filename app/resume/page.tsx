import "paper-css/paper.min.css";
import TrimmedMarkdown from "./TrimmedMarkdown";

function getData(): Props {
    let content: Props = {
        Name: "Karl Oskar Anderson",
        Title: "IT Systems Developer",
        IntroText: `
            Determined and persistent person that strives for accuracy.
            Looking to apply skills learned during bachelor's studies in real world projects.
        `,
        ProfilePictureSrc: "/static/img/profile-25-01-2023_cropped-300-300.png",
        SideInfo: [
            {
                Svg: "bi bi-geo-alt-fill",
                MarkDownContent: "Tallinn"
            },
            {
                Svg: "bi bi-telephone-fill",
                MarkDownContent: "5141103"
            },
            {
                Svg: "bi bi-envelope-fill",
                MarkDownContent: "andersonkarloskar@gmail.com"
            },
            {
                Svg: "bi bi-house-door-fill",
                MarkDownContent: `
                    <a href="https://oskar-anderson.com/">
                        https://oskar-anderson.com/
                    </a>
                `
            }

        ],
        CategorizedListSections: {
            Heading: {
                Svg: "bi bi-gem",
                Title: "Skills"
            },
            Content: [
                {
                    CategoryName: "Languages",
                    List: [".NET/C#", "PHP", "JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"],
                },
                {
                    CategoryName: "Frameworks",
                    List: ["ASP.NET Core", "Slim Framework", "Aurelia", "Vue", "React", "Spring Boot"]
                },
                {
                    CategoryName: "Databases",
                    List: ["PostgreSQL", "MySQL", "SQLite"]
                },
                {
                    CategoryName: "Software",
                    List: ["JetBrains IDEs", "Git", "Postman"]
                },
                {
                    CategoryName: "Other",
                    List: ["Native Estonian", "Proficent English", "Driving: B, C"]
                }
            ],
        },
        WorkSection: {
            Heading: {
                Svg: "bi bi-bookmark-star-fill",
                Title: "Work"
            },
            Content: [
                {
                    Title: "Software developer intern",
                    Company: "TalTech",
                    Period: "June 2023 – Aug 2023",
                    MarkDownContent: `
                        Worked on a programming assignment management Moodle plugin as a full-stack developer in an agile team.
                        Vue, PHP, Laravel, REST, MariaDB <a href="/posts/Charon">[link]</a>
                    `,
                },
                {
                    Title: "Software developer intern",
                    Company: "Sirowa Tallinn AS",
                    Period: "Mar 2021 – June 2021",
                    MarkDownContent: `
                        Developed a full stack warehouse temperature and humidity monitoring system.
                        Created a polished frontend and well structured backend with both SOAP and REST APIs.
                        Implemented binning and clustering algorithms for data visualization and alert observation. 
                        PHP, JS, Bootstrap, Google Charts, MySQL <a href="/posts/Tempsens">[link]</a>
                    `,
                }
            ],
        },
        PersonalProjectsSection: {
            Heading: {
                Svg: "bi bi-briefcase-fill",
                Title: "Personal Projects"
            },
            Content: [
                {
                    MarkDownContent: `
                        Database visualization tool with scripting support written in TypeScript and React
                        <a href="https://github.com/oskar-anderson/RasterModeler">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        Maanteeamet driving exam automation using Python and Selenium
                        <a href="https://github.com/oskar-anderson/maanteeamet-timescanner">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        Full stack app for a customized meal ordering system written in .NET and Aurelia
                        <a href="https://github.com/oskar-anderson/PitsaRiina">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        Algorithm for finding Minimum Spanning Tree written in Java
                        <a href="https://github.com/oskar-anderson/MinimumSpanningTree">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        CSS font animations playground
                        <a href="https://github.com/oskar-anderson/Kapsas">
                            [link]
                        </a>
                    `
                }
            ],
        },
        EducationSection: {
            Heading: {
                Svg: "bi bi-mortarboard-fill",
                Title: "Education"
            },
            Content: [
                {
                    DateFinished: "Jan 2023",
                    MarkDownContent: "IT Systems Development Bachelor's degree - TalTech",
                },
                {
                    DateFinished: "June 2022",
                    MarkDownContent: "Estonian Cyber Command conscript - Ämari Air Base",
                },
                {
                    DateFinished: "June 2018",
                    MarkDownContent: "High School - Tallinn Lilleküla Gymnasium",
                }
            ],
        },
    }
    return content;
}

interface SectionHeading {
    Svg: string;
    Title: string;
}

export interface Props {
    Name: string;
    Title: string;
    IntroText: string;
    ProfilePictureSrc: string;
    SideInfo: {
        Svg: string;
        MarkDownContent: string;
    }[];
    CategorizedListSections: {
        Heading: SectionHeading;
        Content: {
            CategoryName: string;
            List: string[];
        }[];
    };
    WorkSection: {
        Heading: SectionHeading;
        Content: {
            Title: string;
            Company: string;
            Period: string;
            MarkDownContent: string;
        }[];
    };
    PersonalProjectsSection: {
        Heading: SectionHeading;
        Content:
        {
            MarkDownContent: string
        }[];
    };
    EducationSection: {
        Heading: SectionHeading;
        Content: {
            DateFinished: string;
            MarkDownContent: string;
        }[];
    };
}

export default function Page() {
    let model = getData();
    
    return (
        <div className="resume" style={{ display: 'grid' }}>
            <section className="sheet" style={{ display: "flex" }}>
                <div style={{ overflow: "hidden" }}>
                    <div style={{ display: "flex", margin: "10mm 10mm 1.2em 10mm" }}>
                        <img
                            src={model.ProfilePictureSrc}
                            alt="profile-pic"
                            width="120px"
                            height="120px"
                        />
                        <div style={{ marginLeft: "34px" }}>
                            <header style={{ marginBottom: "20px" }}>
                                <h1
                                    style={{
                                        fontSize: "32px",
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        fontFamily: "Merriweather",
                                        fontWeight: 700
                                    }}
                                >
                                    {model.Name}
                                </h1>
                                <div style={{ fontSize: "13pt" }}>{model.Title}</div>
                            </header>
                            <div style={{ textAlign: "justify" }}>{model.IntroText}</div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#f1f1f1",
                            justifyContent: "center",
                            padding: "0.8em 10mm",
                            lineHeight: "1.8em",
                            fontSize: "12px",
                        }}
                        className="flex-gap"
                    >
                        {model.SideInfo.map((x) => {
                            return (
                                <div key={x.MarkDownContent} style={{ display: "flex" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginRight: "0.8em",
                                        }}
                                    >
                                        <i style={{ fontSize: 16 }} className={x.Svg}></i>
                                    </div>
                                    <div>
                                        <TrimmedMarkdown style={{ color: "#000"}}>{x.MarkDownContent}</TrimmedMarkdown>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ margin: "8px 10mm 10mm 10mm" }}>
                        <div>
                            <h2 style={{ display: "flex", marginBottom: "0.4em", fontSize: "1.5em" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i style={{ fontSize: 16 }} className={model.CategorizedListSections.Heading.Svg}></i>
                                </div>
                                <span style={{ marginLeft: "4px" }} className="section-heading">
                                    {model.CategorizedListSections.Heading.Title}
                                </span>
                            </h2>
                            <div style={{ display: "grid", rowGap: "8px" }}>
                                {model.CategorizedListSections.Content.map((x, i) => {
                                    let color = i % 2 === 0 ? "#f1f1f1" : "#ffffff";
                                    return (
                                        <div key={x.CategoryName}
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "repeat(4, 1fr)",
                                                marginLeft: "20px",
                                                backgroundColor: color,
                                                borderRadius: "6px",
                                            }}>
                                            {x.List.map((xx) => {
                                                return <div key={xx} className="grid-item">{xx}</div>;
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            style={{
                                margin: "12px 0",
                                borderBottom: "1px solid #ccc",
                                color: "transparent",
                            }}
                        />
                        <div>
                            <h2 style={{ display: "flex", marginBottom: "0.4em", fontSize: "1.5em" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i style={{ fontSize: 16 }} className={model.WorkSection.Heading.Svg}></i>
                                </div>
                                <span style={{ marginLeft: "4px" }} className="section-heading">
                                    {model.WorkSection.Heading.Title}
                                </span>
                            </h2>
                            <div style={{ marginLeft: "20px" }}>
                                {
                                    model.WorkSection.Content.map(x => {
                                        return (
                                            <div key={x.Period} style={{ position: "relative" }}>
                                                <div
                                                    className="o-std-margin-bottom"
                                                    style={{ display: "flex", justifyContent: "space-between" }}
                                                >
                                                    <div style={{ fontWeight: "bold" }}>
                                                        {x.Company} – {x.Title}
                                                    </div>
                                                    <div style={{ alignItems: "center", display: "flex" }}>
                                                        {x.Period}
                                                    </div>
                                                </div>
                                                <div>
                                                    <TrimmedMarkdown>{x.MarkDownContent}</TrimmedMarkdown>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div
                            style={{
                                margin: "12px 0",
                                borderBottom: "1px solid #ccc",
                                color: "transparent",
                            }}
                        />
                        <div>
                            <h2 style={{ display: "flex", marginBottom: "0.4em", fontSize: "1.5em" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i style={{ fontSize: 16 }} className={model.PersonalProjectsSection.Heading.Svg}></i>
                                </div>
                                <span style={{ marginLeft: "4px" }} className="section-heading">
                                    {model.PersonalProjectsSection.Heading.Title}
                                </span>
                            </h2>
                            <div>
                                <ul>
                                    {model.PersonalProjectsSection.Content.map(x => {
                                        return (
                                            <li key={x.MarkDownContent} className="o-list-item-std-vertical-margin">
                                                <TrimmedMarkdown clazz="mb-0">{x.MarkDownContent}</TrimmedMarkdown>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div
                            style={{
                                margin: "12px 0",
                                borderBottom: "1px solid #ccc",
                                color: "transparent",
                            }}
                        />
                        <div>
                            <h2 style={{ display: "flex", marginBottom: "0.4em", fontSize: "1.5em" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i style={{ fontSize: 16 }} className={model.EducationSection.Heading.Svg}></i>
                                </div>
                                <span style={{ marginLeft: "4px" }} className="section-heading">
                                    {model.EducationSection.Heading.Title}
                                </span>
                            </h2>
                            <div>
                                <ul>
                                    {model.EducationSection.Content.map(x => {
                                        return (
                                            <li key={x.DateFinished}
                                                className="o-list-item-std-vertical-margin"
                                                style={{ position: "relative" }}
                                            >
                                                <div>
                                                    <TrimmedMarkdown>{x.MarkDownContent}</TrimmedMarkdown>
                                                </div>
                                                <div style={{ position: "absolute", right: 0, top: 0 }}>
                                                    {x.DateFinished}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}