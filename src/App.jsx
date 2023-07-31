import Button from "./components/button";
import { AiFillBehanceCircle } from "react-icons/ai";
function App() {
  return (
    <>
      <div className="w-full flex flex-row">
        <div className="mt-12 mx-14 w-[20%] ">
          <div className="mt-6 mb-16">
            <span className="text-red-500 text-[13px] font-semibold">Dev</span>
            <span className="text-slate-900 text-[13px] font-semibold">
              ChallengeSergio
            </span>
          </div>
          <div>
            <div className="w-[62px] text-neutral-400 text-sm font-medium my-10">
              Colors
            </div>
            <div className="text-neutral-400 text-sm font-medium my-10">
              Typography
            </div>
            <div className="text-neutral-400 text-sm font-medium my-10">
              Spaces
            </div>
            <div className="text-neutral-400 text-sm font-medium my-10">
              Buttons
            </div>
            <div className="text-slate-900 text-sm font-bold my-10">Inputs</div>
            <div className="text-neutral-400 text-sm font-medium my-10">
              Grid
            </div>
          </div>
        </div>

        <div className="w-[80%]">
          <div className="text-neutral-600 text-2xl font-medium  my-20 flex justify-center w-[25%]">
            Buttons
          </div>
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
          <div className="flex flex-row w-[50%]  my-28 justify-around">
            <Button
              text="Default"
              textColor="text-white"
              isDisabled={false}
              shadowStatus="shadow-none "
              color="bg-blue-600"
              weight="w-[81px]"
              height="h-9"
            />
            <Button
              text="Default"
              textColor="text-white"
              isDisabled={false}
              shadowStatus="shadow-none "
              color="bg-red-800"
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
          <div className="flex flex-row w-[75%] justify-around ">
            <div className="text-black text-xs font-normal">size sm</div>
            <div className="text-black text-xs font-normal">size md</div>
            <div className="text-black text-xs font-normal">size lg</div>
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
          <div className="text-zinc-500  font-normal text-lg mx-24">
            &:hover, &:focus
          </div>
          <div className="flex flex-row w-[100%] justify-around my-28">
            <Button
              text="Button"
              textColor="text-zinc-400"
              isDisabled={true}
              shadowStatus="shadow "
              color="bg-white"
              hover="hover:bg-opacity-10 hover:bg-zinc-400"
              weight="w-[81px]"
              height="h-9"
            />
            <Button
              text="Button"
              textColor="text-blue-600"
              isDisabled={true}
              shadowStatus="shadow "
              color="bg-white"
              hover="hover:bg-opacity-10 hover:bg-blue-600"
              weight="w-[81px]"
              height="h-9"
              iconPosition="left"
            />
            <Button
              text="Button"
              textColor="text-slate-600"
              isDisabled={true}
              shadowStatus="shadow "
              color="bg-white"
              hover="hover:bg-opacity-10 hover:bg-slate-600"
              weight="w-[81px]"
              height="h-9"
              iconPosition="left"
            />
            <Button
              text="Button"
              textColor="text-red-600"
              isDisabled={true}
              shadowStatus="shadow "
              color="bg-white"
              hover="hover:bg-opacity-10 hover:bg-red-600 "
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
          <div className="text-center">
            <span className="text-neutral-400 text-sm font-medium">
              created by
            </span>
            <span className="text-neutral-400 text-sm font-semibold"> </span>
            <span className="text-neutral-400 text-sm font-bold underline">
              Arthaz1245
            </span>
            <span className="text-neutral-400 text-sm font-medium">
              {" "}
              - devChallenges.io
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
