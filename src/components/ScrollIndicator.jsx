export default function ScrollIndicator({ showProjects }) {
  return (
    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${showProjects ? 'opacity-0' : 'animate-bounce'}`}>
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
}
