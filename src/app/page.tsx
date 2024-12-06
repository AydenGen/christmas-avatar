"use client"

import { Toolbar } from "@/components/toolbar"
import { useFabric } from "@/hooks/use-fabric"
import { recommendedFonts, otherFonts } from "@/lib/constants"

export default function HomePage() {
  const {
    canvasRef,
    setBackgroundImage,
    addText,
    addChillGuy,
    changeFontFamily,
    changeTextColor,
    flipImage,
    deleteSelectedObject,
    downloadCanvas,
    changeBackgroundColor,
    currentBackgroundColor,
    selectedTextProperties,
  } = useFabric()

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=${[
          ...recommendedFonts,
          ...otherFonts,
        ]
          .map((font) => font.replace(/\s+/g, "+"))
          .join("&family=")}&display=swap");
      `}</style>
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
            changeFontFamily={changeFontFamily}
            changeTextColor={changeTextColor}
            flipImage={flipImage}
            deleteSelectedObject={deleteSelectedObject}
            downloadCanvas={downloadCanvas}
            changeBackgroundColor={changeBackgroundColor}
            currentBackgroundColor={currentBackgroundColor}
            selectedTextProperties={selectedTextProperties}
          />
          <div className="flex flex-col justify-center text-center items-center text-sm md:flex-row">
            <a
              className="text-balance leading-loose text-muted-foreground  font-medium hover:text-blue-700"
              href="https://x.com/intent/follow?screen_name=sujjeeee"
              target="_blank"
            >
              Built by Sujjeee
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
