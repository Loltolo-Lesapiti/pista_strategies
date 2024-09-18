interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="bg-[#10393b] rounded-[15px] p-6 text-center">
    <h3 className="text-3xl font-bold text-white">{value}</h3>
    <p className="text-[#7b7b7b] text-normal">{label}</p>
  </div>
);

const StatsComponent = () => {
  const stats = [
    { value: "100+", label: "Happy Clients" },
    { value: "75+", label: "Project Done" },
    { value: "250+", label: "Professional Team" },
    { value: "125+", label: "Award Won" },
  ];

  return (
    <div className="w-full bg-[#10393b] p-8 rounded-[15px] mt-[100px]">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
