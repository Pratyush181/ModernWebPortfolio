import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">

                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Problem Solver</h3>

                    <p className="text-muted-foreground">I specialize in creating resposive, accessible and performant
                        web applications using modern technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        <a href="https://www.linkedin.com/in/pratyush-shankar-17511b235/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKe%2BS76q%2FSEWycLghSwJJDQ%3D%3D" className="cosmic-button">LinkedIn</a>

                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold tex-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsive website and web apps with modern frameworks</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold tex-lg">UI/UX Designs</h4>
                                <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences"</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase  />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold tex-lg">Problem Solving</h4>
                                <p className="text-muted-foreground">Efficiently solving problems related to Data Structures and Algrotihms</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
        </div>
    
    </section>
};