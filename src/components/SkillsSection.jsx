'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: "⚛️", description: "Building modern, interactive user interfaces" },
        { name: "Next.js", icon: "▲", description: "Full-stack React framework for production" },
        { name: "Express.js", icon: "🚀", description: "Fast, minimalist web framework for Node.js" },
        { name: "Node.js", icon: "🟢", description: "Server-side JavaScript runtime environment" }
      ]
    },
    {
      title: "Databases", 
      skills: [
        { name: "MongoDB", icon: "🍃", description: "NoSQL document database for modern apps" },
        { name: "SQL", icon: "🗄️", description: "Relational database management and queries" }
      ]
    },
    {
      title: "Problem Solving & DSA",
      skills: [
        { name: "Data Structures & Algorithms", icon: "🧠", description: "Strong problem-solving skills with C++" },
        { name: "LeetCode", icon: "💡", description: "Active competitive programming profile" },
        { name: "C++", icon: "⚡", description: "Primary language for competitive programming" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "📜", description: "Modern ES6+ for web development" },
        { name: "Python", icon: "🐍", description: "Versatile language for various applications" },
        { name: "Java", icon: "☕", description: "Object-oriented programming and enterprise apps" },
        { name: "C", icon: "🔧", description: "System programming and foundational concepts" }
      ]
    }
  ];

  return (
    <section id="skills-section" className="relative z-10 py-20 pt-32 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical expertise across web development, problem-solving, and programming languages. 
            Specialized in full-stack development and competitive programming.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-white/20 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Competitive Programming</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Strong problem-solving skills with active participation in competitive programming. 
              Experienced in implementing complex algorithms and data structures using C++.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <span className="text-yellow-400">⭐</span>
                <span className="text-white font-medium">LeetCode Profile</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <span className="text-blue-400">🏆</span>
                <span className="text-white font-medium">DSA Expert</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <span className="text-green-400">⚡</span>
                <span className="text-white font-medium">C++ Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
