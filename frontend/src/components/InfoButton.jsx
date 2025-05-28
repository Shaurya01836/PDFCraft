function InfoButton({ icon: Icon, text, bgColor, iconColor }) {
  return (
    <div className={`rounded-full px-4 py-2 flex items-center gap-2 ${bgColor}`}>
      <Icon className={`w-5 h-5 ${iconColor}`} />
      <span className={`text-sm font-medium ${iconColor}`}>{text}</span>
    </div>
  );
}

export default InfoButton;
