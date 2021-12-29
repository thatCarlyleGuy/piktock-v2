/* eslint-disable react/prop-types */

const StuffTable = ({
  className,
  font = 'Roboto',
  weight = 'Regular',
  size,
  spacing,
}) => (
  <div className={`${className}`}>
    <table className="text-gray-500">
      <thead>
        <tr className="typo-b2">
          <th className="pr-10">Font</th>
          <th className="pr-10">Weight</th>
          <th className="pr-10">Size</th>
          <th className="pr-10">Letter Spacing</th>
        </tr>
      </thead>
      <tbody>
        <tr className="typo-b1">
          <td>{font}</td>
          <td>{weight}</td>
          <td>{size}</td>
          <td>{spacing}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const TypeScale = () => (
  <div className="space-y-10">
    <div>
      <h1 className="typo-h1">Headline 1</h1>
      <StuffTable font="Roboto" weight="Light" size="94" spacing="-1.5" />
    </div>

    <div>
      <h2 className="typo-h2">Headline 2</h2>
      <StuffTable font="Roboto" weight="Light" size="60" spacing="-0.5" />
    </div>

    <div>
      <h3 className="typo-h3">Headline 3</h3>
      <StuffTable font="Roboto" size="48" spacing="0" />
    </div>

    <div>
      <h4 className="typo-h4">Headline 4</h4>
      <StuffTable font="Roboto" size="34" spacing="0.25" />
    </div>

    <div>
      <h5 className="typo-h5">Headline 5</h5>
      <StuffTable font="Roboto" size="24" spacing="0" />
    </div>

    <div>
      <h6 className="typo-h6">Headline 6</h6>
      <StuffTable font="Roboto" weight="Medium" size="20" spacing="0.15" />
    </div>

    <div>
      <div className="typo-s1">Subtitle 1</div>
      <StuffTable font="Roboto" size="16" spacing="0.15" />
    </div>

    <div>
      <div className="typo-s2">Subtitle 2</div>
      <StuffTable font="Roboto" weight="Medium" size="14" spacing="0.1" />
    </div>

    <div>
      <p className="typo-b1">Body 1</p>
      <StuffTable font="Roboto" size="16" spacing="0.5" />
    </div>

    <div>
      <p className="typo-b2">Body 2</p>
      <StuffTable font="Roboto" size="14" spacing="0.25" />
    </div>

    <div>
      <div className="typo-btn">Button</div>
      <StuffTable font="Roboto" weight="Medium" size="14" spacing="1.25" />
    </div>

    <div>
      <div className="typo-cap">Caption</div>
      <StuffTable font="Roboto" size="12" spacing="0.4" />
    </div>

    <div>
      <div className="typo-over">Overline</div>
      <StuffTable font="Roboto" size="10" spacing="1.5" />
    </div>
  </div>
);
export default TypeScale;
