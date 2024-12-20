"use client"

import { Toolbar } from "@/components/toolbar"
import { useFabric } from "@/hooks/use-fabric"

export default function HomePage() {
  const {
    canvasRef,
    setBackgroundImage,
    addText,
    addChillGuy,
    flipImage,
    deleteSelectedObject,
    downloadCanvas,
    changeBackgroundColor,
    currentBackgroundColor,
    addChristmasItem,
  } = useFabric()

  return (
    <>
      <div className="px-2 space-y-10 min-h-screen items-center h-full flex-col flex justify-between">
        <div></div>
        <canvas
          ref={canvasRef}
          className="border rounded-3xl overflow-hidden "
        />
        <div className="pt-10 pb-8 space-y-5 flex items-center flex-col">
          <Toolbar
            setBackgroundImage={setBackgroundImage}
            addText={addText}
            addChillGuy={addChillGuy}
            flipImage={flipImage}
            deleteSelectedObject={deleteSelectedObject}
            downloadCanvas={downloadCanvas}
            changeBackgroundColor={changeBackgroundColor}
            currentBackgroundColor={currentBackgroundColor}
            addChristmasItem={addChristmasItem}
          />
          <div className="flex flex-col justify-center text-center items-center text-sm md:flex-row ">
            <a
              className="text-balance leading-loose text-muted-foreground font-medium hover:text-red-400"
              href="https://x.com/intent/follow?screen_name=aydengen"
              target="_blank"
            >
              Built by @Ayden
            </a>
            &nbsp;
            <a
              className="text-balance leading-loose text-muted-foreground font-medium hover:text-blue-700"
              href="https://x.com/intent/follow?screen_name=sujjeeee"
              target="_blank"
            >
              Thanks @Sujjeee
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
