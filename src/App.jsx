import Button from "./components/button";
import { AiFillBehanceCircle } from "react-icons/ai";
function App() {
  return (
    <>
      <div className="flex flex-row w-[50%] justify-around my-28">
        <Button
          text="Default"
          textColor="text-neutral-700"
          isDisabled={false}
          shadowStatus="shadow-md"
          color="bg-neutral-200 "
          weight="w-[81px]"
          height="h-9"
        />
        <Button
          text="Default"
          textColor="text-neutral-700"
          isDisabled={false}
          shadowStatus="shadow-md"
          color="bg-zinc-400"
          weight="w-[81px]"
          height="h-9"
        />
      </div>

      <div className="flex flex-row w-[50%] justify-around my-28">
        <Button
          text="Default"
          textColor="text-blue-600"
          isDisabled={false}
          shadowStatus="shadow-md"
          color="bg-white "
          weight="w-[88px]"
          height="h-9"
          border="border-blue-600"
        />
        <Button
          text="Default"
          textColor="text-blue-600"
          isDisabled={false}
          shadowStatus="shadow-md"
          color="bg-blue-600 bg-opacity-10"
          weight="w-[81px]"
          height="h-9"
          border="border-blue-600"
        />
      </div>
      <div className="flex flex-row w-[50%] justify-around my-28">
        <Button
          text="Default"
          textColor="text-blue-600"
          isDisabled={false}
          shadowStatus="shadow-none "
          color="bg-white "
          weight="w-[88px]"
          height="h-9"
        />
        <Button
          text="Default"
          textColor="text-blue-600"
          isDisabled={false}
          shadowStatus="shadow-none "
          color="bg-blue-600 bg-opacity-10"
          weight="w-[81px]"
          height="h-9"
        />
      </div>
      <div className="flex flex-row w-[25%]  my-28 justify-center">
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={false}
          shadowStatus="shadow-none "
          color="bg-blue-600"
          weight="w-[81px]"
          height="h-9"
        />
      </div>
      <div className="flex flex-row w-[50%] justify-around my-28">
        <Button
          text="Disabled"
          textColor="text-neutral-400"
          isDisabled={true}
          shadowStatus="shadow-none "
          color="bg-neutral-200"
          weight="w-[88px]"
          height="h-9"
        />
        <Button
          text="Disabled"
          textColor="text-neutral-400"
          isDisabled={true}
          shadowStatus="shadow-none "
          color="bg-white"
          weight="w-[81px]"
          height="h-9"
          iconPosition="left"
        />
      </div>
      <div className="flex flex-row w-[50%] justify-around my-28">
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={false}
          shadowStatus="shadow "
          color="bg-blue-600"
          weight="w-[105px]"
          height="h-9"
          icon={<AiFillBehanceCircle />}
          iconPosition="right"
        />
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={false}
          shadowStatus="shadow "
          color="bg-blue-600"
          weight="w-[105px]"
          height="h-9"
          icon={<AiFillBehanceCircle />}
          iconPosition="left"
        />
      </div>

      <div className="flex flex-row w-[75%] justify-around my-28">
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow-none "
          color="bg-blue-600"
          weight="w-[73px]"
          height="h-8"
        />
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow-none "
          color="bg-blue-600"
          weight="w-[81px]"
          height="h-9"
          iconPosition="left"
        />
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow-none "
          color="bg-blue-600"
          weight="w-[93px]"
          height="h-11"
          iconPosition="left"
        />
      </div>
      <div className="flex flex-row w-[100%] justify-around my-28">
        <Button
          text="Default"
          textColor="text-neutral-700"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-zinc-400"
          weight="w-[81px]"
          height="h-9"
        />
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-blue-600"
          weight="w-[81px]"
          height="h-9"
          iconPosition="left"
        />
        <Button
          text="Secondary"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-slate-600"
          weight="w-[104px]"
          height="h-9"
          iconPosition="left"
        />
        <Button
          text="Danger"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-red-600 "
          weight="w-[81px]"
          height="h-9"
          iconPosition="left"
        />
      </div>
      <div className="flex flex-row w-[100%] justify-around my-28">
        <Button
          text="Default"
          textColor="text-neutral-700"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-zinc-400"
          weight="w-[81px]"
          height="h-9"
        />
        <Button
          text="Default"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-blue-700"
          weight="w-[81px]"
          height="h-9"
          iconPosition="left"
        />
        <Button
          text="Secondary"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-slate-800"
          weight="w-[104px]"
          height="h-9"
          iconPosition="left"
        />
        <Button
          text="Danger"
          textColor="text-white"
          isDisabled={true}
          shadowStatus="shadow "
          color="bg-red-800 "
          weight="w-[81px]"
          height="h-9"
          iconPosition="left"
        />
      </div>
    </>
  );
}

export default App;
