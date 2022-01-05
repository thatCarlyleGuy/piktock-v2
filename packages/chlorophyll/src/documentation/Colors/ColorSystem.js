// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
// https://palettte.app/
// https://colorbox.io/

// eslint-disable-next-line react/prop-types
import Card from '../../components/Card';

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

// eslint-disable-next-line react/prop-types
const MainColorScale = () => (
  <div>
    <div className="grid grid-rows-2 grid-cols-10 gap-4 h-20">
      <div className="bg-primary-50 rounded-lg" />
      <div className="bg-primary-100 rounded-lg" />
      <div className="bg-primary-200 rounded-lg" />
      <div className="bg-primary-400 rounded-lg" />
      <div className="bg-primary rounded-lg" />
      <div className="bg-primary-600 rounded-lg" />
      <div className="bg-primary-700 rounded-lg" />
      <div className="bg-primary-800 rounded-lg" />
      <div className="bg-primary-900 rounded-lg" />

      <div />
      <div />
      <div />
      <div />
      <div />
      <div>Primary</div>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

const SecColorScale = () => (
  <div className="grid grid-cols-10 gap-4 h-20 py-5 mb-10">
    <div className="bg-sec-50 rounded-lg" />
    <div className="bg-sec-100 rounded-lg" />
    <div className="bg-sec-200 rounded-lg" />
    <div className="bg-sec-400 rounded-lg" />
    <div className="bg-sec rounded-lg" />
    <div className="bg-sec-600 rounded-lg" />
    <div className="bg-sec-700 rounded-lg" />
    <div className="bg-sec-800 rounded-lg" />
    <div className="bg-sec-900 rounded-lg" />
  </div>
);

export const ColorScale = () => (
  <>
    <MainColorScale />
    <SecColorScale />
  </>
);

export const ColorSystem = () => (
  <div className="w-full h-full my-10 bg-slate-200 py-10 px-10 rounded-xl">
    {/* Primary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-primary" title="Primary" />

      <Swatch
        bg="bg-primary"
        textColor="text-on-primary"
        text="Primary"
        colorTitle="Primary"
      />
      <Swatch
        bg="bg-on-primary"
        textColor="text-primary"
        text="On Primary"
        colorTitle="Primary 0"
      />
      <Swatch
        bg="bg-primary-container"
        textColor="text-on-primary-container"
        text="Primary Container"
        colorTitle="Primary 50"
      />
      <Swatch
        bg="bg-on-primary-container"
        textColor="text-primary-container"
        text="On Primary Container"
        colorTitle="Primary 800"
      />
    </div>
    {/* Secondary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-secondary" title="Secondary" />

      <Swatch
        bg="bg-secondary"
        textColor="text-on-secondary"
        text="Secondary"
        colorTitle="Secondary"
      />
      <Swatch
        bg="bg-on-secondary"
        textColor="text-secondary"
        text="On Secondary"
        colorTitle="Secondary 0"
      />
      <Swatch
        bg="bg-secondary-container"
        textColor="text-on-secondary-container"
        text="Secondary Container"
        colorTitle="Secondary 50"
      />
      <Swatch
        bg="bg-on-secondary-container"
        textColor="text-secondary-container"
        text="On Secondary Container"
        colorTitle="Secondary 800"
      />
    </div>
    {/* Tertiary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-tertiary" title="Tertiary" />

      <Swatch
        bg="bg-tertiary"
        textColor="text-on-tertiary"
        text="Tertiary"
        colorTitle="Tertiary"
      />
      <Swatch
        bg="bg-on-tertiary"
        textColor="text-tertiary"
        text="On Tertiary"
        colorTitle="Tertiary 0"
      />
      <Swatch
        bg="bg-tertiary-container"
        textColor="text-on-tertiary-container"
        text="Tertiary Container"
        colorTitle="Tertiary 50"
      />
      <Swatch
        bg="bg-on-tertiary-container"
        textColor="text-tertiary-container"
        text="On Tertiary Container"
        colorTitle="Tertiary 800"
      />
    </div>
    {/* Error */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-error" title="Error" />

      <Swatch
        bg="bg-error"
        textColor="text-on-error"
        text="Error"
        colorTitle="Error"
      />
      <Swatch
        bg="bg-on-error"
        textColor="text-error"
        text="On Error"
        colorTitle="Error 0"
      />
      <Swatch
        bg="bg-error-container"
        textColor="text-on-error-container"
        text="Error Container"
        colorTitle="Error 50"
      />
      <Swatch
        bg="bg-on-error-container"
        textColor="text-error-container"
        text="On Error Container"
        colorTitle="Error 800"
      />
    </div>
    {/* Neutral */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mt-32 mb-12 mx-auto text-sm">
      <ColorCircle bg="bg-neutral" title="Neutral" />

      <Swatch
        bg="bg-neutral-background"
        textColor="text-on-neutral-background"
        text="Background"
        colorTitle="Neutral 95"
      />
      <Swatch
        bg="bg-on-neutral-background"
        textColor="text-neutral-background"
        text="On Background"
        colorTitle="Neutral 05"
      />
      <Swatch
        bg="bg-neutral-surface"
        textColor="text-on-neutral-surface"
        text="Surface"
        colorTitle="Neutral 95"
      />
      <Swatch
        bg="bg-on-neutral-surface"
        textColor="text-neutral-surface"
        text="On Surface"
        colorTitle="Neutral 05"
      />
    </div>
    {/* Neutral Variant */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-neutral" title="Neutral Variant" />

      <Swatch
        bg="bg-surface-variant"
        textColor="text-on-surface-variant"
        text="Surface Variant"
        colorTitle="Neutral 50"
      />
      <Swatch
        bg="bg-on-surface-variant"
        textColor="text-surface-variant"
        text="On Surface Variant"
        colorTitle="Neutral 700"
      />
      <Swatch
        className="col-span-2"
        bg="bg-outline"
        textColor="text-white"
        text="On Surface"
        colorTitle="Neutral 200"
      />
    </div>
    {/* Custom Colours */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mt-32 mb-12 mx-auto text-sm">
      <ColorCircle bg="bg-success" title="Success Custom" />

      <Swatch
        bg="bg-success"
        textColor="text-on-success"
        text="Background"
        colorTitle="Green"
      />
      <Swatch
        bg="bg-on-success"
        textColor="text-success"
        text="On Background"
        colorTitle="Green 0"
      />
      <Swatch
        bg="bg-success-container"
        textColor="text-on-success-container"
        text="Surface"
        colorTitle="Green 50"
      />
      <Swatch
        bg="bg-on-success-container"
        textColor="text-success-container"
        text="On Surface"
        colorTitle="Green 800"
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
        bg="bg-primary-dark"
        textColor="text-on-primary-dark"
        text="Primary"
        colorTitle="Primary 100"
      />
      <Swatch
        bg="bg-on-primary-dark"
        textColor="text-primary-dark"
        text="On Primary"
        colorTitle="Primary 800"
      />
      <Swatch
        bg="bg-primary-container-dark"
        textColor="text-on-primary-container-dark"
        text="Primary Container"
        colorTitle="Primary 700"
      />
      <Swatch
        bg="bg-on-primary-container-dark"
        textColor="text-primary-container-dark"
        text="On Primary Container"
        colorTitle="Primary 50"
      />
    </div>
    {/* Dark Secondary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle textColor="text-white" bg="bg-secondary" title="Secondary" />

      <Swatch
        bg="bg-secondary-dark"
        textColor="text-on-secondary-dark"
        text="Secondary"
        colorTitle="Secondary 100"
      />
      <Swatch
        bg="bg-on-secondary-dark"
        textColor="text-secondary-dark"
        text="On Secondary"
        colorTitle="Secondary 800"
      />
      <Swatch
        bg="bg-secondary-container-dark"
        textColor="text-on-secondary-container-dark"
        text="Secondary Container"
        colorTitle="Secondary 700"
      />
      <Swatch
        bg="bg-on-secondary-container-dark"
        textColor="text-secondary-container-dark"
        text="On Secondary Container"
        colorTitle="Secondary 50"
      />
    </div>
    {/* Dark Tertiary */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle textColor="text-white" bg="bg-tertiary" title="Tertiary" />

      <Swatch
        bg="bg-tertiary-dark"
        textColor="text-on-tertiary-dark"
        text="Tertiary"
        colorTitle="Tertiary 100"
      />
      <Swatch
        bg="bg-on-tertiary-dark"
        textColor="text-tertiary-dark"
        text="On Tertiary"
        colorTitle="Tertiary 800"
      />
      <Swatch
        bg="bg-tertiary-container-dark"
        textColor="text-on-tertiary-container-dark"
        text="Tertiary Container"
        colorTitle="Tertiary 700"
      />
      <Swatch
        bg="bg-on-tertiary-container-dark"
        textColor="text-tertiary-container-dark"
        text="On Tertiary Container"
        colorTitle="Tertiary 50"
      />
    </div>
    {/* Dark Error */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mx-auto text-sm m-12">
      <ColorCircle bg="bg-error" textColor="text-on-error" title="Error" />

      <Swatch
        bg="bg-error-dark"
        textColor="text-on-error-dark"
        text="Error"
        colorTitle="Error 100"
      />
      <Swatch
        bg="bg-on-error-dark"
        textColor="text-error-dark"
        text="On Error"
        colorTitle="Error 800"
      />
      <Swatch
        bg="bg-error-container-dark"
        textColor="text-on-error-container-dark"
        text="Error Container"
        colorTitle="Error 700"
      />
      <Swatch
        bg="bg-on-error-container-dark"
        textColor="text-error-container-dark"
        text="On Error Container"
        colorTitle="Error 50"
      />
    </div>
    {/* Dark Neutral */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mt-32 mb-12 mx-auto text-sm">
      <ColorCircle bg="bg-neutral" textColor="text-white" title="Neutral" />

      <Swatch
        bg="bg-neutral-background-dark"
        textColor="text-on-neutral-background-dark"
        text="Background"
        colorTitle="Neutral 05"
      />
      <Swatch
        bg="bg-on-neutral-background-dark"
        textColor="text-neutral-background-dark"
        text="On Background"
        colorTitle="Neutral 95"
      />
      <Swatch
        bg="bg-neutral-surface-dark"
        textColor="text-on-neutral-surface-dark"
        text="Surface"
        colorTitle="Neutral 05"
      />
      <Swatch
        bg="bg-on-neutral-surface-dark"
        textColor="text-neutral-surface-dark"
        text="On Surface"
        colorTitle="Neutral 95"
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
        bg="bg-surface-variant-dark"
        textColor="text-on-surface-variant-dark"
        text="Surface Variant"
        colorTitle="Neutral 50"
      />
      <Swatch
        bg="bg-on-surface-variant-dark"
        textColor="text-surface-variant-dark"
        text="On Surface Variant"
        colorTitle="Neutral 700"
      />
      <Swatch
        className="col-span-2"
        bg="bg-outline-dark"
        textColor="text-white"
        text="On Surface"
        colorTitle="Neutral 200"
      />
    </div>
    {/* Dark Custom Colours */}
    <div className="grid grid-rows-1 grid-cols-5 h-32 mb-5 mt-32 mb-12 mx-auto text-sm">
      <ColorCircle
        bg="bg-success-dark"
        textColor="text-white"
        title="Success Custom"
      />

      <Swatch
        bg="bg-success-dark"
        textColor="text-on-success-dark"
        text="Background"
        colorTitle="Green 100"
      />
      <Swatch
        bg="bg-on-success-dark"
        textColor="text-success-dark"
        text="On Background"
        colorTitle="Green 800"
      />
      <Swatch
        bg="bg-success-container-dark"
        textColor="text-on-success-container-dark"
        text="Surface"
        colorTitle="Green 700"
      />
      <Swatch
        bg="bg-on-success-container-dark"
        textColor="text-success-container-dark"
        text="On Surface"
        colorTitle="Green 50"
      />
    </div>
  </div>
);
