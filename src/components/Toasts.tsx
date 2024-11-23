import useStore from "../store/useStore"

export default function Toasts() {
  const notifications = useStore((state) => state.notifications)

  return (
    <div className="
      fixed
      right-12
      top-8
      w-[400px]
      h-full
      flex-col
      gap-2
      text-black
    ">
      {
        notifications.map((notification) =>
          <div className="
            w-full
            bg-white
            h-[40px]
            p-2
            mt-6
            rounded-xl
            shadow-xl
          ">
            &gt; {notification.msg}
          </div>
        )
      }
    </div>
  )
}
