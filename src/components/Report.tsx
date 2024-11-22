export default function Report({
  open,
  onClose
}: Readonly<{
  open: boolean,
  onClose: () => void,
}>) {
  if (!open) return;

  return (
    <div className="
      fixed
      z-50
      inset-0
      bg-gray-900
      bg-opacity-60
      overflow-x-hidden
      h-full
      w-full
      px-4
      backdrop-blur
    ">
      <div className="
        relative
        top-20
        mx-auto
        shadow-xl
        rounded-md
        bg-white
        text-black
        max-w-2xl
      ">
        <div className="
          absolute
          top-8
          right-8
          cursor-pointer
        " onClick={onClose}>
          <b>X</b>
        </div>
        <div className="
          overflow-y-hidden
          p-[80px]
          text-center
        ">
          <p>
            <input type="checkbox"/>
            <label> First reason to erase this post</label><br/>
            <input type="checkbox"/>
            <label> Second reason to erase this post</label><br/>
            <input type="checkbox"/>
            <label> Third reason to erase this post</label><br/>
            <input type="checkbox"/>
            <label> Fourth reason to erase this post</label><br/>
            <input type="checkbox"/>
            <label> Sixth reason to erase this post</label><br/>

            <button
              className="mt-6 bg-red-800 text-white p-2"
              onClick={() => {
                onClose()
              }}
            >
              &gt; Report it
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
