export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center hover:shadow-lg transition">
      <div className="text-4xl mb-4 flex justify-center">
        <Icon size={36} className="text-brand-red" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}