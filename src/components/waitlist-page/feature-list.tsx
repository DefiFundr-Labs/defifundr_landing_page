import { CheckCircle } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Exclusive early access",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "A seamless, automated payroll experience",
    icon: CheckCircle,
  },
  {
    id: 3,
    title: "Updates on launch & new features",
    icon: CheckCircle,
  },
];

export default function FeatureList() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-center gap-2 text-white/80">
          <feature.icon className="h-5 w-5 flex-shrink-0 text-white" />
          <span className="text-sm">{feature.title}</span>
        </div>
      ))}
    </div>
  );
}
