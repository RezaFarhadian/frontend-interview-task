// src/store/useStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware"

interface Post {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
  saved?: boolean
}

interface Notification {
  msg: string,
}

interface StoreState {
  findById: (id: number) => Post;
  posts: Post[];
  toggleLike: (id: number) => void;
  toggleSave: (id: number) => void;
  notifications: Notification[];
  pushNotification: (msg: string) => void;
  clearNotifications: () => void;
}

const useStore = create<StoreState>()(
  persist((set, get) => ({
    posts: [
      {
        id: 1,
        author: "John Doe",
        content: "This is a sample post with some text and an image.",
        image: "https://via.placeholder.com/600",
        liked: false
      },
      {
        id: 2,
        author: "Jane Smith",
        content: "Another sample post without an image.",
        image: "",
        liked: false
      },
      {
        id: 3,
        author: "Alice Johnson",
        content: "Enjoying a sunny day at the beach!",
        image: "https://via.placeholder.com/600",
        liked: true
      },
      {
        id: 4,
        author: "Bob Williams",
        content: "Had a great time hiking this weekend.",
        image: "",
        liked: false
      },
      {
        id: 5,
        author: "Emily Davis",
        content: "Just finished reading a fantastic book!",
        image: "https://via.placeholder.com/600",
        liked: true
      },
      {
        id: 6,
        author: "Michael Brown",
        content: "Check out this cool photo I took last night.",
        image: "https://via.placeholder.com/600",
        liked: false
      },
      {
        id: 7,
        author: "Sarah Wilson",
        content: "Feeling grateful for all the support I've received.",
        image: "",
        liked: true
      },
      {
        id: 8,
        author: "Chris Martinez",
        content: "Exploring new cities is always so much fun!",
        image: "https://via.placeholder.com/600",
        liked: false
      },
      {
        id: 9,
        author: "Laura Taylor",
        content: "Happy to announce my new project launch!",
        image: "https://via.placeholder.com/600",
        liked: true
      },
      {
        id: 10,
        author: "David Anderson",
        content: "Trying out some new recipes in the kitchen.",
        image: "",
        liked: false
      },
      {
        id: 11,
        author: "Jessica Thomas",
        content: "Had a fantastic weekend getaway!",
        image: "https://via.placeholder.com/600",
        liked: false
      },
      {
        id: 12,
        author: "Daniel Moore",
        content: "Looking forward to the upcoming concert!",
        image: "",
        liked: true
      },
      {
        id: 13,
        author: "Sophia Jackson",
        content: "Enjoying the little things in life.",
        image: "https://via.placeholder.com/600",
        liked: true
      },
      {
        id: 14,
        author: "Matthew White",
        content: "Learning new coding skills every day.",
        image: "",
        liked: false
      },
      {
        id: 15,
        author: "Olivia Harris",
        content: "My new art piece is finally complete!",
        image: "https://via.placeholder.com/600",
        liked: true
      },
      {
        id: 16,
        author: "James Clark",
        content: "Just got back from a fantastic road trip.",
        image: "",
        liked: false
      },
      {
        id: 17,
        author: "Lily Lewis",
        content: "Enjoying the beautiful autumn weather.",
        image: "https://via.placeholder.com/600",
        liked: false
      },
      {
        id: 18,
        author: "Benjamin Walker",
        content: "Can't wait to start my new job next week!",
        image: "",
        liked: true
      },
      {
        id: 19,
        author: "Ava Young",
        content: "Capturing the beauty of nature through my lens.",
        image: "https://via.placeholder.com/600",
        liked: true
      },
      {
        id: 20,
        author: "William Hall",
        content: "Reflecting on the past year with gratitude.",
        image: "",
        liked: false
      }
    ],
    toggleLike: (id: number) =>
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, liked: !post.liked } : post
        )
      })),
    toggleSave: (id: number) =>
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, saved: !post.saved } : post
        )
      })),

    findById: (id: number) => {
      return get().posts.filter((p) => p.id === id)[0]
    },

    notifications: [],
    pushNotification: (msg: string) => {
      set((state) => ({
        notifications: [...state.notifications, {
          msg,
        }]
      }))
      setTimeout(() => {
        set((state) => ({
          notifications: state.notifications.filter((notification) => {
            return notification.msg !== msg
          })
        }))
      }, 5000)
    },
    clearNotifications: () => {
      set(() => ({
        notifications: [],
      }))
    },
    }), {
      name: "store"
    }
  )
);

export default useStore;
