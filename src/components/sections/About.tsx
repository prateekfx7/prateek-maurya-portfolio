const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm <span className="text-foreground font-semibold">Prateek Maurya</span>. 
            I specialize in building modern websites and editing engaging videos that are 
            clean, purposeful, and result-driven. I work closely with clients to understand 
            their vision and transform it into digital products that look professional and 
            perform well. Whether you need a stunning website or compelling video content, 
            I'm here to bring your ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
