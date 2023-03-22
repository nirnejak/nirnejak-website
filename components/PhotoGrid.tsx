import * as React from "react"

import classNames from "utils/classNames"

const cardClasses =
  "h-full w-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden transition-all hover:scale-[1.01]"

const PhotoGrid: React.FC = () => {
  return (
    <section
      className="grid gap-4"
      style={{
        gridAutoRows: 240,
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      }}
    >
      <div
        className={classNames(cardClasses, "card-wide")}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609321979677-66f6f757b31d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses, "card-tall")}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609263001752-786ed152206f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609258261167-9d33e85fa991?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses, "card-tall")}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609266378844-4a8af6d72fab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')",
        }}
      />
      <div
        className={classNames(cardClasses)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609256723197-7e59e1dcd039?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses, "card-wide")}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609309320678-b1768c26d48e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609258261167-9d33e85fa991?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses, "card-tall")}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609266378844-4a8af6d72fab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')",
        }}
      />
      <div
        className={classNames(cardClasses, "card-tall")}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609306187232-7b192c128371?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609258261167-9d33e85fa991?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
      <div
        className={classNames(cardClasses, "card-wide")}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609264516311-706afaf3d80e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
        }}
      />
    </section>
  )
}

export default PhotoGrid
