const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#1f1b16] overflow-hidden">
      {/* Simulated Coffee Steam Lines */}
      <div className="absolute left-[25%] bottom-10 w-10 h-48 bg-gradient-to-t from-[#9c755a] via-transparent to-transparent opacity-30 rounded-full blur-2xl animate-steam" />
      <div className="absolute left-[50%] bottom-12 w-12 h-52 bg-gradient-to-t from-[#9c6c48] via-transparent to-transparent opacity-40 rounded-full blur-2xl animate-steam" />
      <div className="absolute right-[20%] bottom-10 w-10 h-48 bg-gradient-to-t from-[#9c754a] via-transparent to-transparent opacity-20 rounded-full blur-2xl animate-steam" />
    </div>
  );
};

export default AnimatedBackground;
