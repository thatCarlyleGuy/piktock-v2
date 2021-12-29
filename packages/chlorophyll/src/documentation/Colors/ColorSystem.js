// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
// https://palettte.app/
// https://colorbox.io/

// eslint-disable-next-line react/prop-types
const Swatch = ({ className, bg, textColor, text, colorTitle }) => (
  <div className={`${bg} ${className} p-2 relative`}>
    <p className={`${textColor}`}>{text}</p>
    <p className={`${textColor} absolute bottom-2 right-2`}>{colorTitle}</p>
  </div>
);

// eslint-disable-next-line react/prop-types
const ColorCircle = ({ bg, title, textColor }) => (
  <div
    className={`${textColor} p-2 mx-auto my-auto flex flex-col items-center`}
  >
    <p>{title}</p>
    <div className={`${bg} rounded-full w-10 h-10`} />
  </div>
);

export const ColorSystem = () => (
  <div className="w-full h-full my-10 bg-slate-200 py-10 px-10 rounded-xl">
    {/* Primary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-primary" title="Primary" />

      <Swatch
        bg="bg-primary"
        textColor="text-white"
        text="Primary"
        colorTitle="Primary"
      />
      <Swatch
        bg="bg-white"
        textColor="text-primary"
        text="On Primary"
        colorTitle="Primary"
      />
      <Swatch
        bg="bg-primary-200"
        textColor="text-primary-700"
        text="Primary Container"
        colorTitle="Primary 200"
      />
      <Swatch
        bg="bg-primary-700"
        textColor="text-primary-200"
        text="On Primary Container"
        colorTitle="Primary 700"
      />
    </div>

    {/* Secondary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-secondary" title="Secondary" />

      <Swatch
        bg="bg-secondary"
        textColor="text-white"
        text="Secondary"
        colorTitle="Secondary"
      />
      <Swatch
        bg="bg-white"
        textColor="text-secondary-600"
        text="On Secondary"
        colorTitle="Secondary 600"
      />
      <Swatch
        bg="bg-secondary-300"
        textColor="text-secondary-800"
        text="Secondary Container"
        colorTitle="Secondary 300"
      />
      <Swatch
        bg="bg-secondary-800"
        textColor="text-secondary-300"
        text="On Secondary Container"
        colorTitle="Secondary 800"
      />
    </div>

    {/* Tertiary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-tertiary" title="Tertiary" />

      <Swatch
        bg="bg-tertiary"
        textColor="text-white"
        text="Tertiary"
        colorTitle="Tertiary"
      />
      <Swatch
        bg="bg-white"
        textColor="text-tertiary-600"
        text="On Tertiary"
        colorTitle="Tertiary 600"
      />
      <Swatch
        bg="bg-tertiary-300"
        textColor="text-tertiary-800"
        text="Tertiary Container"
        colorTitle="Tertiary 300"
      />
      <Swatch
        bg="bg-tertiary-800"
        textColor="text-tertiary-300"
        text="On Tertiary Container"
        colorTitle="Tertiary 800"
      />
    </div>

    {/* Error */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-error" title="Error" />

      <Swatch
        bg="bg-error"
        textColor="text-white"
        text="Error"
        colorTitle="Error"
      />
      <Swatch
        bg="bg-white"
        textColor="text-error"
        text="On Error"
        colorTitle="Error"
      />
      <Swatch
        bg="bg-error-300"
        textColor="text-error-900"
        text="Error Container"
        colorTitle="Error 300"
      />
      <Swatch
        bg="bg-error-900"
        textColor="text-error-300"
        text="On Error Container"
        colorTitle="Error 900"
      />
    </div>

    {/* Neutral */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mt-32 mb-12 mx-auto text-sm">
      <ColorCircle bg="bg-neutral" title="Neutral" />

      <Swatch
        bg="bg-neutral-200"
        textColor="text-neutral-900"
        text="Background"
        colorTitle="Neutral 900"
      />
      <Swatch
        bg="bg-neutral-900"
        textColor="text-neutral-200"
        text="On Background"
        colorTitle="Neutral 200"
      />
      <Swatch
        bg="bg-neutral-200"
        textColor="text-neutral-900"
        text="Surface"
        colorTitle="Neutral 900"
      />
      <Swatch
        bg="bg-neutral-900"
        textColor="text-neutral-200"
        text="On Surface"
        colorTitle="Neutral 200"
      />
    </div>

    {/* Neutral Variant */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-neutral" title="Neutral Variant" />

      <Swatch
        bg="bg-neutral-300"
        textColor="text-neutral-700"
        text="Surface Variant"
        colorTitle="Neutral 700"
      />
      <Swatch
        bg="bg-neutral-700"
        textColor="text-neutral-300"
        text="On Surface Variant"
        colorTitle="Neutral 300"
      />
      <Swatch
        className="col-span-2"
        bg="bg-neutral"
        textColor="text-neutral-200"
        text="On Surface"
        colorTitle="Neutral 200"
      />
    </div>

    {/* Custom Colours */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mt-32 mb-12 mx-auto text-sm">
      <ColorCircle bg="bg-green-700" title="Green Custom" />

      <Swatch
        bg="bg-green-700"
        textColor="text-white"
        text="Background"
        colorTitle="Green 700"
      />
      <Swatch
        bg="bg-white"
        textColor="text-green-700"
        text="On Background"
        colorTitle="Green 700"
      />
      <Swatch
        bg="bg-green-200"
        textColor="text-green-900"
        text="Surface"
        colorTitle="Green 900"
      />
      <Swatch
        bg="bg-green-900"
        textColor="text-green-200"
        text="On Surface"
        colorTitle="Green 200"
      />
    </div>
  </div>
);

export const DarkColorSystem = () => (
  <div className="w-full h-full my-10 bg-slate-800 py-10 px-10 rounded-xl">
    {/* Dark Primary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle textColor="text-white" bg="bg-primary" title="Primary" />

      <Swatch
        bg="bg-primary-200"
        textColor="text-primary-700"
        text="Primary"
        colorTitle="Primary 700"
      />
      <Swatch
        bg="bg-primary-700"
        textColor="text-primary-200"
        text="On Primary"
        colorTitle="Primary 200"
      />
      <Swatch
        bg="bg-primary"
        textColor="text-primary-100"
        text="Primary Container"
        colorTitle="Primary 100"
      />
      <Swatch
        bg="bg-primary-100"
        textColor="text-primary"
        text="On Primary Container"
        colorTitle="Primary"
      />
    </div>

    {/* Dark Secondary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle textColor="text-white" bg="bg-secondary" title="Secondary" />

      <Swatch
        bg="bg-secondary-400"
        textColor="text-secondary-800"
        text="Secondary"
        colorTitle="Secondary 800"
      />
      <Swatch
        bg="bg-secondary-800"
        textColor="text-secondary-400"
        text="On Secondary"
        colorTitle="Secondary 400"
      />
      <Swatch
        bg="bg-secondary-600"
        textColor="text-secondary-300"
        text="Secondary Container"
        colorTitle="Secondary 300"
      />
      <Swatch
        bg="bg-secondary-300"
        textColor="text-secondary-600"
        text="On Secondary Container"
        colorTitle="Secondary 600"
      />
    </div>

    {/* Dark Tertiary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle textColor="text-white" bg="bg-tertiary" title="Tertiary" />

      <Swatch
        bg="bg-tertiary-300"
        textColor="text-tertiary-800"
        text="Tertiary"
        colorTitle="Tertiary 800"
      />
      <Swatch
        bg="bg-tertiary-800"
        textColor="text-tertiary-300"
        text="On Tertiary"
        colorTitle="Tertiary 800"
      />
      <Swatch
        bg="bg-tertiary-600"
        textColor="text-tertiary-200"
        text="Tertiary Container"
        colorTitle="Tertiary 200"
      />
      <Swatch
        bg="bg-tertiary-200"
        textColor="text-tertiary-600"
        text="On Tertiary Container"
        colorTitle="Tertiary 600"
      />
    </div>

    {/* Dark Error */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-error" title="Error" />

      <Swatch
        bg="bg-error-400"
        textColor="text-error-900"
        text="Error"
        colorTitle="Error 300"
      />
      <Swatch
        bg="bg-error-900"
        textColor="text-error-400"
        text="On Error"
        colorTitle="Error 400"
      />
      <Swatch
        bg="bg-error-700"
        textColor="text-error-400"
        text="Error Container"
        colorTitle="Error 400"
      />
      <Swatch
        bg="bg-error-400"
        textColor="text-error-700"
        text="On Error Container"
        colorTitle="Error 700"
      />
    </div>

    {/* Dark Neutral */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mt-32 mb-12 mx-auto text-sm">
      <ColorCircle bg="bg-neutral" textColor="text-white" title="Neutral" />

      <Swatch
        bg="bg-neutral-900"
        textColor="text-neutral-200"
        text="Background"
        colorTitle="Neutral 200"
      />
      <Swatch
        bg="bg-neutral-200"
        textColor="text-neutral-900"
        text="On Background"
        colorTitle="Neutral 900"
      />
      <Swatch
        bg="bg-neutral-900"
        textColor="text-neutral-200"
        text="Surface"
        colorTitle="Neutral 200"
      />
      <Swatch
        bg="bg-neutral-200"
        textColor="text-neutral-900"
        text="On Surface"
        colorTitle="Neutral 900"
      />
    </div>

    {/* Dark Neutral Variant */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle
        bg="bg-neutral"
        textColor="text-white"
        title="Neutral Variant"
      />

      <Swatch
        bg="bg-neutral-700"
        textColor="text-neutral-300"
        text="Surface Variant"
        colorTitle="Neutral 300"
      />
      <Swatch
        bg="bg-neutral-300"
        textColor="text-neutral-700"
        text="On Surface Variant"
        colorTitle="Neutral 700"
      />
      <Swatch
        className="col-span-2"
        bg="bg-neutral"
        textColor="text-neutral-200"
        text="On Surface"
        colorTitle="Neutral 200"
      />
    </div>
  </div>
);
