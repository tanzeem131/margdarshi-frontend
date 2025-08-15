interface TextInputProps {
  text: string;
  textSize?: string;
}
const TextInput = ({ text, textSize = "text-2xl" }: TextInputProps) => {
  return (
    <div>
      <h2 className={`font-voltec ${textSize} capitalize text-white`}>
        {text}
      </h2>
    </div>
  );
};

export default TextInput;
