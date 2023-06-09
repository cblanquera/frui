import type { SelectOption } from 'frui-core/dist/types/fields';

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import Button from 'frui-react/dist/Button';
import Alert from 'frui-react/dist/Alert';
import Badge from 'frui-react/dist/Badge';
import Table, { Thead, Tfoot, Trow, Tcol, Tgroup } from 'frui-react/dist/Table';
import Loader from 'frui-react/dist/Loader';

import Control from 'frui-react/dist/Control';

import Input from 'frui-react/dist/fields/Input';
import Slug from 'frui-react/dist/fields/Slug';
import NumberField from 'frui-react/dist/fields/Number';
import Password from 'frui-react/dist/fields/Password';
import InputMask from 'frui-react/dist/fields/Mask';
import File from 'frui-react/dist/fields/File';
import Filelist from 'frui-react/dist/fields/Filelist';
import Image from 'frui-react/dist/fields/Image';
import Imagelist from 'frui-react/dist/fields/Imagelist';

import Textarea from 'frui-react/dist/fields/Textarea';
import Markdown from 'frui-react/dist/fields/Markdown';

import Checkbox from 'frui-react/dist/fields/Checkbox';
import Radio from 'frui-react/dist/fields/Radio';
import Switch from 'frui-react/dist/fields/Switch';

import Select from 'frui-react/dist/fields/Select';
import SelectCountry from 'frui-react/dist/fields/Country';
import SelectCurrency from 'frui-react/dist/fields/Currency';

import Autocomplete from 'frui-react/dist/fields/Autocomplete';

import DateField from 'frui-react/dist/fields/Date';
import Time from 'frui-react/dist/fields/Time';
import Datetime from 'frui-react/dist/fields/Datetime';

import Taglist from 'frui-react/dist/fields/Taglist';
import Textlist from 'frui-react/dist/fields/Textlist';
import Metadata from 'frui-react/dist/fields/Metadata';

import FormatColor from 'frui-react/dist/formats/Color';
import FormatCountry from 'frui-react/dist/formats/Country';
import FormatCurrency from 'frui-react/dist/formats/Currency';
import FormatDate from 'frui-react/dist/formats/Date';
import FormatEmail from 'frui-react/dist/formats/Email';
import FormatFormula from 'frui-react/dist/formats/Formula';
import FormatHTML from 'frui-react/dist/formats/HTML';
import FormatImage from 'frui-react/dist/formats/Image';
import FormatImagelist from 'frui-react/dist/formats/Imagelist';
import FormatJSON from 'frui-react/dist/formats/JSON';
import FormatLink from 'frui-react/dist/formats/Link';
import FormatList from 'frui-react/dist/formats/List';
import FormatMarkdown from 'frui-react/dist/formats/Markdown';
import FormatMetadata from 'frui-react/dist/formats/Metadata';
import FormatNumber from 'frui-react/dist/formats/Number';
import FormatOverflow from 'frui-react/dist/formats/Overflow';
import FormatRating from 'frui-react/dist/formats/Rating';
import FormatSeparated from 'frui-react/dist/formats/Separated';
import FormatTable from 'frui-react/dist/formats/Table';
import FormatTaglist from 'frui-react/dist/formats/Taglist';
import FormatText from 'frui-react/dist/formats/Text'; 
import FormatYesno from 'frui-react/dist/formats/Yesno';

const PrettyCode = ({ code }: {code: string}) => {
  let spaces = 0;
  let pad = 0;
  const lines = code.split("\n").map((line) => {
    //how many starting spaces?
    const match = line.match(/^(\s+)/);
    //if spaces
    if (match?.length) {
      if (spaces > match[0].length) {
        pad -= 2;
      } else if (spaces < match[0].length) {
        pad += 2;
      }  
      spaces = match[0].length;
    }
    if (pad < 0) {
      pad = 0;
    }
    return ' '.repeat(Math.max(pad - 2, 0)) + line.trim();
  });

  return (
    <div style={{ backgroundColor: '#EFEFEF', border: '1px solid #CCCCCC', padding: '0 10px' }}>
      <pre><code>{lines.join("\n").trim()}</code></pre>
    </div>
  );
}
const App = () => {
  const [ complete, setComplete] = React.useState<string[]>([]);
  const remote = (query: string) => {
    setTimeout(() => {
      if (!query.length) return setComplete([]);
      setComplete(['big', 'small', 'medium', 'large', 'extra large'])
    }, 500)
  };
  const [ radio1, setRadio1 ] = React.useState<any>();
  const [ radio2, setRadio2 ] = React.useState<any>();
  const options = [
    {label: 'Option 1', value: 'option-1', keyword: 'option1'},
    {label: (<em className="font-bold">Option 2</em>), value: 'option-2', keyword: 'option2'},
    {label: 'Option 3', value: 'option-3', keyword: 'option3'},
  ];
  const options2 = {
    'option-a': 'Option A',
    'option-b': 'Option B',
    'option-c': 'Option C'
  };

  //controlled states
  const [ num, setNum ] = React.useState(0);
  const [ textlist, setTextlist ] = React.useState<string[]>([]);
  const [ metadata, setMetadata ] = React.useState<Record<string, string>>({});
  const [ select, setSelect ] = React.useState<SelectOption>();

  useEffect(() => {
    const interval = setInterval(() => {
      setNum(num => num + 1);
    }, 5000);

    const timeout = setTimeout(() => {
      setTextlist(['z', 'y', 'x']);
      setMetadata({ z: 'x', y: 'y', x: 'z'});
      setSelect({ label: 'Option 3', value: 'option-3', keyword: 'option3' });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, []);

  const [ tab, setTabs ] = React.useState(0);
  
  return (
    <section style={{ fontFamily: 'Arial', height: '100vh', position: 'relative', width: '100vw' }}>
      <header style={{ alignItems: 'center', backgroundColor: '#EDF2F7', display: 'flex', fontWeight: 'bold', left: '225px', padding: '12px', position: 'absolute', right: 0, top: 0 }}>
        Demo
      </header>
      <aside style={{ backgroundColor: '#05B6D3', bottom: 0, left: 0, position: 'absolute', top: 0, width: '225px' }}>
        <h1 style={{ color: 'white', fontFamily: 'Arial', fontWeight: 'bold', margin: 0, padding: '10px 0', textAlign: 'center', textTransform: 'uppercase' }}>Frui.</h1>
        <ul style={{ color: 'white', listStyle: 'none', paddingLeft: '10px' }}>
          <li style={{ cursor: 'pointer', paddingBottom: '20px', fontWeight: 'bold' }} onClick={() => setTabs(0)}>
            Fields (32)
          </li>
          <li style={{ cursor: 'pointer', paddingBottom: '20px', fontWeight: 'bold' }} onClick={() => setTabs(1)}>
            Components (13)
          </li>
          <li style={{ cursor: 'pointer', paddingBottom: '20px', fontWeight: 'bold' }} onClick={() => setTabs(2)}>
            Formats (20)
          </li>
        </ul>
      </aside>
      <aside style={{ backgroundColor: '#243545', bottom: 0, fontFamily: 'Arial', right: 0, position: 'absolute', top: 0, width: '225px' }}>
        <div style={{ display: tab === 0 ? 'block' : 'none', fontSize: '12px', padding: '0 20px' }}>
          <h2 style={{ color: 'white', fontWeight: 'bold', margin: 0, padding: '10px 0', textTransform: 'uppercase' }}>Fields</h2>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Input</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Slug</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>File</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Filelist</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Image</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Imagelist</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Number</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Password</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Mask</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Textarea</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Markdown</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Radio</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Checkbox</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Switch</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Date</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Autocomplete</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Select</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Country</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Currency</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Taglist</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Textlist</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Metadata</a>
        </div>
        <div style={{ display: tab === 1 ? 'block' : 'none', fontSize: '12px', padding: '0 20px' }}>
          <h2 style={{ color: 'white', fontWeight: 'bold', margin: 0, padding: '10px 0', textTransform: 'uppercase' }}>Components</h2>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Loading</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Button</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Alert</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Badge</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Table</a>
        </div>
        <div style={{ display: tab === 2 ? 'block' : 'none', fontSize: '12px', padding: '0 20px' }}>
          <h2 style={{ color: 'white', fontWeight: 'bold', margin: 0, padding: '10px 0', textTransform: 'uppercase' }}>Formats</h2>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Color</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Country</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Currency</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Date</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Email</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Formula</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>HTML</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Image</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Imagelist</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>JSON</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Link</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>List</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Markdown</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Metadata</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Number</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Overflow</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Rating</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Separation</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Table</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Taglist</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Transformation</a>
          <a style={{ color: 'white', cursor: 'pointer', display: 'block', fontSize: '14px', marginBottom: '16px' }}>Boolean</a>
        </div>
      </aside>
      <main style={{ bottom: 0, left: '225px', padding: '8px', overflow: 'auto', position: 'absolute', right: '225px', top: '42px' }}>
        <div style={{ display: tab === 0 ? 'block' : 'none' }}>
          <h2>Fields</h2>
          <p>
            All fields prefer `onUpdate` vs `onChange`. `onChange` still works, 
            but you wont get object or arrays as values.
          </p>
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Input Field">
              <Input defaultValue="value 1" onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Input from 'frui-react/fields/Input'
            
            <Control label="Input Field">
              <Input defaultValue="value 1" onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Input With Error" error="something" >
              <Input error={true} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Input With Error" error="something" >
              <Input error={true} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Slug Field">
              <Slug defaultValue="value 1" onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Slug from 'frui-react/fields/Slug'

            <Control label="Slug Field">
              <Slug defaultValue="value 1" onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Slug Field (only dashes)">
              <Slug defaultValue="value 2" dash onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Slug Field (only dashes)">
              <Slug defaultValue="value 2" dash onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Slug Field (only lines)">
              <Slug defaultValue="value 3" line onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Slug Field (only lines)">
              <Slug defaultValue="value 3" line onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Slug Field (camel)">
              <Slug defaultValue="some value 4" camel onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Slug Field (camel)">
              <Slug defaultValue="some value 4" camel onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Single File Input">
              <File
                defaultValue="foobar"
                onUpload={(files, then) => {
                  setTimeout(() => {
                    then('https://via.placeholder.com/150')
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import File from 'frui-react/fields/File'

            <Control label="Single File Input">
              <File
                defaultValue="foobar"
                onUpload={(files, then) => {
                  //just a mock call
                  setTimeout(() => {
                    then('https://via.placeholder.com/150')
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          `} />
          <p style={{ fontSize: '13px' }}>
            Bring your own uploader whether AWS, GCP or Azure. All file 
            inputs examples in this demo don't really upload anything, so 
            try without fear!
          </p>
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Multi File Input">
              <Filelist
                defaultValue={['foo', 'bar']}
                onUpload={(files, then) => {
                  setTimeout(() => {
                    then(['https://via.placeholder.com/150'])
                    setTimeout(() => {
                      then(files.map((file, i) => 'https://via.placeholder.com/150' + i))
                    }, 5000)
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Filelist from 'frui-react/fields/Filelist'

            <Control label="Multi File Input">
              <Filelist
                defaultValue={['foo', 'bar']}
                onUpload={(files, then) => {
                  //just a mock call
                  setTimeout(() => {
                    then(['https://via.placeholder.com/150'])
                    setTimeout(() => {
                      then(files.map((file, i) => 'https://via.placeholder.com/150' + i))
                    }, 5000)
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Single Image Input">
              <Image
                defaultValue="https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png"
                onUpload={(files, then) => {
                  setTimeout(() => {
                    then('https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-long.png')
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Image from 'frui-react/fields/Image'

            <Control label="Single Image Input">
              <Image
                defaultValue="https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png"
                onUpload={(files, then) => {
                  //just a mock call
                  setTimeout(() => {
                    then('https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-long.png')
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Multi Image Input">
              <Imagelist
                defaultValue={[
                  'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png', 
                  'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-long.png'
                ]}
                onUpload={(files, then) => {
                  setTimeout(() => {
                    then(['https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png'])
                    setTimeout(() => {
                      then(files.map((file, i) => 'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-2.png'))
                    }, 5000)
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Imagelist from 'frui-react/fields/Imagelist'

            <Control label="Multi Image Input">
              <Imagelist
                defaultValue={[
                  'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png', 
                  'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-long.png'
                ]}
                onUpload={(files, then) => {
                  //just a mock call
                  setTimeout(() => {
                    then(['https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png'])
                    setTimeout(() => {
                      then(files.map((file, i) => 'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-2.png'))
                    }, 5000)
                  }, 5000)
                }} 
                onUpdate={console.log} 
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Number Input">
              <NumberField defaultValue={1900.01} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import NumberField from 'frui-react/fields/Number'

            <Control label="Number Input">
              <NumberField defaultValue={1900.01} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Number Input With Error" error="something">
              <NumberField defaultValue="1900.01" min="0" max="2000" onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Number Input With Error" error="something">
              <NumberField defaultValue="1900.01" min="0" max="2000" onUpdate={console.log} />
            </Control>
          `} />

          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Number Input (Controlled State Value)">
              <NumberField value={num} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import NumberField from 'frui-react/fields/Number'

            const [ num, setNum ] = useState(0)

            <Control label="Number Input (Controlled State Value)">
              <NumberField defaultValue={num} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Password Input">
              <Password onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Password from 'frui-react/fields/Password'

            <Control label="Password Input">
              <Password onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Password With Error" error="something">
              <Password error={true} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Password With Error" error="something">
              <Password error={true} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Input Mask">
              <InputMask mask="9999-9999-9999-9999" onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Mask from 'frui-react/fields/Mask'

            <Control label="Input Mask">
              <Mask mask="9999-9999-9999-9999" onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Input Mask With Error" error="something" >
              <InputMask mask="9(999) 999-999" error={true} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Input Mask With Error" error="something" >
              <Mask mask="9(999) 999-999" error={true} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Textarea">
              <Textarea defaultValue="value 1" onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Textarea from 'frui-react/fields/Textarea'

            <Control label="Textarea">
              <Textarea defaultValue="value 1" onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Textarea With Error" error="something">
              <Textarea error={true} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Textarea With Error" error="something">
              <Textarea error={true} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Markdown" className="text-xs my-4">
              <Markdown defaultValue="A paragraph with *emphasis* and **strong importance**" onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Markdown from 'frui-react/fields/Markdown'

            <Control label="Markdown" className="text-xs my-4">
              <Markdown defaultValue="A paragraph with *emphasis* and **strong importance**" onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Styled Radio Group">
              <Radio label="Radio A" checked={radio1 === 1} onChange={() => setRadio1(1)} />
              <span style={{ display: 'inline-block', margin: '0 10px' }}>
                <Radio label="Radio B" check color="#FF893C" checked={radio1 === 2} onChange={() => setRadio1(2)} />
              </span>
              <Radio label="Radio C" square solid sharp checked={radio1 === 3} onChange={() => setRadio1(3)} />
            </Control>
          </div>
          <PrettyCode code={`
            import Radio from 'frui-react/fields/Radio'

            <Radio label="Radio A" checked={radio1 === 1} onChange={() => setRadio1(1)} />
            <Radio label="Radio B" check color="#FF893C" checked={radio1 === 2} onChange={() => setRadio1(2)} />
            <Radio label="Radio C" square solid sharp checked={radio1 === 3} onChange={() => setRadio1(3)} />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Radio Group With Error" error="something">
              <Radio label="Radio D" square solid error={true} checked={radio2 === 1} onChange={() => setRadio2(1)} onUpdate={console.log} />
              <span style={{ display: 'inline-block', margin: '0 10px' }}>
                <Radio label="Radio E" sharp check color="#28A745" error={true} checked={radio2 === 2} onChange={() => setRadio2(2)} onUpdate={console.log} />
              </span>
              <Radio label="Radio F" error={true} checked={radio2 === 3} onChange={() => setRadio2(3)} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            <Radio label="Radio D" square solid error={true} checked={radio2 === 1} onChange={() => setRadio2(1)} onUpdate={console.log} />
            <Radio label="Radio E" sharp check color="#28A745" error={true} checked={radio2 === 2} onChange={() => setRadio2(2)} onUpdate={console.log} />
            <Radio label="Radio F" error={true} checked={radio2 === 3} onChange={() => setRadio2(3)} onUpdate={console.log} />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Checkboxes">
              <Checkbox label="Checkbox A" />
              <span style={{ display: 'inline-block', margin: '0 10px' }}>
                <Checkbox label="Checkbox B" color="#FF893C" circle sharp />
              </span>
              <Checkbox label="Checkbox C" solid square />
            </Control>
          </div>
          <PrettyCode code={`
            import Checkbox from 'frui-react/fields/Checkbox'

            <Checkbox label="Checkbox A" />
            <Checkbox label="Checkbox B" color="#FF893C" circle sharp />
            <Checkbox label="Checkbox C" solid square />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Checkbox With Errors" error="something">
              <Checkbox error={true} label="Checkbox D" color="#FF893C" solid rounded value={2} onUpdate={console.log} />
              <span style={{ display: 'inline-block', margin: '0 10px' }}>
                <Checkbox error={true} label="Checkbox E" circle onUpdate={console.log} />
              </span>
              <Checkbox error={true} label="Checkbox F" rounded square value="3" onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            <Checkbox error={true} label="Checkbox D" color="#FF893C" solid rounded value={2} onUpdate={console.log} />
            <Checkbox error={true} label="Checkbox E" circle onUpdate={console.log} />
            <Checkbox error={true} label="Checkbox F" rounded square value="3" onUpdate={console.log} />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Switches">
              <Switch label="Switch A" value="1" onUpdate={console.log} />
              <span style={{ display: 'inline-block', margin: '0 10px' }}>
                <Switch label="Switch B" value={2} onUpdate={console.log} rounded onoff blue />
              </span>
              <Switch label="Switch C" onUpdate={console.log} checkex orange knob="ridge" />
            </Control>
          </div>
          <PrettyCode code={`
            import Switch from 'frui-react/fields/Switch'

            <Switch label="Switch A" value="1" onUpdate={console.log} />
            <Switch label="Switch B" value={2} onUpdate={console.log} rounded onoff blue />
            <Switch label="Switch C" onUpdate={console.log} checkex orange knob="ridge" />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="More Switches">
              <Switch label="Switch D" rounded knob="ridge" green />
              <span style={{ display: 'inline-block', margin: '0 10px' }}>
                <Switch error={true} label="Switch E" knob="ridge" sunmoon blue />
              </span>
              <Switch error={true} label="Switch F" blue rounded />
            </Control>
          </div>
          <PrettyCode code={`
            <Switch label="Switch D" rounded knob="ridge" green />
            <Switch error={true} label="Switch E" knob="ridge" sunmoon blue />
            <Switch error={true} label="Switch F" blue rounded />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Switches With Errors" error="something">
              <Switch error={true} label="Switch G" knob="checkex" green />
              <span style={{ display: 'inline-block', margin: '0 10px' }}>
                <Switch error={true} label="Switch H" rounded sunmoon orange />
              </span>
              <Switch error={true} label="Switch I" blue knob="ridge" />
            </Control>
          </div>
          <PrettyCode code={`
            <Switch error={true} label="Switch G" knob="checkex" green />
            <Switch error={true} label="Switch H" rounded sunmoon orange />
            <Switch error={true} label="Switch I" blue knob="ridge" />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Dates">
              <DateField defaultValue={new Date()} onUpdate={console.log} />
              <div style={{ margin: '10px 0' }}></div>
              <Time defaultValue={Date.now()} onUpdate={console.log} />
              <div style={{ margin: '10px 0' }}></div>
              <Datetime defaultValue={'2023-01-01T05:00Z'} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import DateField from 'frui-react/fields/Date'
            import Time from 'frui-react/fields/Time'
            import Datetime from 'frui-react/fields/Datetime'

            <DateField defaultValue={new Date()} onUpdate={console.log} />
            <Time defaultValue={Date.now()} onUpdate={console.log} />
            <Datetime defaultValue={'2023-01-01T05:00Z'} onUpdate={console.log} />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Dates With Errors" error="something">
              <DateField defaultValue={new Date()} onUpdate={console.log} error={true} />
              <div style={{ margin: '10px 0' }}></div>
              <Time defaultValue={Date.now()} onUpdate={console.log} error={true} />
              <div style={{ margin: '10px 0' }}></div>
              <Datetime defaultValue={'2023-01-01T05:00Z'} onUpdate={console.log} error={true} />
            </Control>
          </div>
          <PrettyCode code={`
            <DateField defaultValue={new Date()} onUpdate={console.log} error={true} />
            <Time defaultValue={Date.now()} onUpdate={console.log} error={true} />
            <Datetime defaultValue={'2023-01-01T05:00Z'} onUpdate={console.log} error={true} />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Autocomplete">
              <Autocomplete 
                options={complete}
                onQuery={remote}
                onUpdate={console.log} 
              />
            </Control>
          </div>
          <PrettyCode code={`
            import Autocomplete from 'frui-react/fields/Autocomplete'

            <Autocomplete 
              options={complete}
              onQuery={remote}
              onUpdate={console.log} 
            />
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Select Dropdown" style={{ position: 'relative', zIndex: 100 }}>
              <Select options={options} defaultValue={{label: 'Option 1', value: 'option-1', keyword: 'option1'}} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Select from 'frui-react/fields/Select'

            <Control label="Select Dropdown" style={{ position: 'relative', zIndex: 100 }}>
              <Select options={options} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Select Dropdown (Controlled State Value)" style={{ position: 'relative', zIndex: 100 }}>
              <Select options={options} value={select} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Select from 'frui-react/fields/Select'

            const [ select, setSelect ] = React.useState<SelectOption>();

            <Control label="Select Dropdown (Controlled State Value)" style={{ position: 'relative', zIndex: 100 }}>
              <Select options={options} value={select} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Select Dropdown With Errors" style={{ position: 'relative', zIndex: 99 }} error="something">
              <Select options={options2} onUpdate={console.log} error={true} searchable={true} />
            </Control>
          </div>
          <PrettyCode code={`
            const options2 = {
              'option-a': 'Option A',
              'option-b': 'Option B',
              'option-c': 'Option C'
            };
            <Control label="Select Dropdown With Errors" style={{ position: 'relative', zIndex: 99 }} error="something">
              <Select options={options2} onUpdate={console.log} error={true} searchable={true} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Country Field" style={{ position: 'relative', zIndex: 98 }}>
              <SelectCountry onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Country from 'frui-react/fields/Country'

            <Control label="Country Field" style={{ position: 'relative', zIndex: 98 }}>
              <Country onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Country  With Errors" style={{ position: 'relative', zIndex: 97 }} error="something">
              <SelectCountry onUpdate={console.log} error={true} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Country  With Errors" style={{ position: 'relative', zIndex: 97 }} error="something">
              <Country onUpdate={console.log} error={true} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Currency Field" style={{ position: 'relative', zIndex: 96 }}>
              <SelectCurrency onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Currency from 'frui-react/fields/Currency'

            <Control label="Currency Field" style={{ position: 'relative', zIndex: 96 }}>
              <Currency onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Currency  With Errors" error="something">
              <SelectCurrency onUpdate={console.log} error={true} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Currency  With Errors" error="something">
              <Currency onUpdate={console.log} error={true} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Taglist">
              <Taglist placeholder="Yo...." value={['boo', 'far']} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Taglist from 'frui-react/fields/Taglist'

            <Control label="Taglist">
              <Taglist placeholder="Yo...." value={['boo', 'far']} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Textlist">
              <Textlist defaultValue={['a', 'b']} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Textlist from 'frui-react/fields/Textlist'

            <Control label="Textlist">
              <Textlist defaultValue={['a', 'b']} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Textlist With Errors" error="something">
              <Textlist add="Add Option" defaultValue={['c', 'd']} onUpdate={console.log} error={true} />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Textlist With Errors" error="something">
              <Textlist add="Add Option" defaultValue={['c', 'd']} onUpdate={console.log} error={true} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Textlist (Controlled State Value)">
              <Textlist value={textlist} onUpdate={console.log} />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Textlist from 'frui-react/fields/Textlist'

            const [ textlist, setTextlist ] = React.useState<string[]>([]);

            <Control label="Textlist (Controlled State Value)">
              <Textlist value={textlist} onUpdate={console.log} />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Metadata">
              <Metadata 
                defaultValue={[['a', 'b'], ['c', 'd']]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))} 
              />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Metadata from 'frui-react/fields/Metadata'

            <Control label="Metadata">
              <Metadata 
                value={[['a', 'b'], ['c', 'd']]}
                onUpdate={entries => console.log(Object.fromEntries(entries))}
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Metadata (Controlled State Value)">
              <Metadata 
                value={Object.entries(metadata)} 
                onUpdate={entries => console.log(Object.fromEntries(entries))} 
              />
            </Control>
          </div>
          <PrettyCode code={`
            import Control from 'frui-react/Control'
            import Metadata from 'frui-react/fields/Metadata'
            
            const [ metadata, setMetadata ] = React.useState<Record<string, string>>({});

            <Control label="Metadata (Controlled State Value)">
              <Metadata 
                value={Object.entries(metadata)}
                onUpdate={entries => console.log(Object.fromEntries(entries))}
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Meta Numbers With Errors" error="something">
              <Metadata 
                data={{ type: 'number', min: 0, max: 10000000, step: 0.01 }}
                defaultValue={[['a', 2.05], ['c', 10000]]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))}
                error={true}
              />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Meta Numbers With Errors" error="something">
              <Metadata 
                data={{ type: 'number', min: 0, max: 10000000, step: 0.01 }}
                defaultValue={[['a', 2.05], ['c', 10000]]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))}
                error={true}
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Meta Dates">
              <Metadata 
                data={{ type: 'date' }}
                defaultValue={[['a', Date.now()], ['c', new Date]]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))}
              />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Meta Dates">
              <Metadata 
                data={{ type: 'date' }}
                defaultValue={[['a', Date.now()], ['c', new Date]]}  
                onUpdate={entries => console.log(Object.fromEntries(entries))}
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Meta Times" className="text-xs my-4">
              <Metadata 
                data={{ type: 'time' }}
                defaultValue={[['a', Date.now()], ['c', new Date]]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))}
              />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Meta Times" className="text-xs my-4">
              <Metadata 
                data={{ type: 'time' }}
                defaultValue={[['a', Date.now()], ['c', new Date]]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))}
              />
            </Control>
          `} />
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Control label="Meta Datetimes With Errors" error="something">
              <Metadata 
                data={{ type: 'datetime' }}
                defaultValue={[['a', Date.now()], ['c', new Date]]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))}
                error={true}
              />
            </Control>
          </div>
          <PrettyCode code={`
            <Control label="Meta Datetimes With Errors" error="something">
              <Metadata 
                data={{ type: 'datetime' }}
                defaultValue={[['a', Date.now()], ['c', new Date]]} 
                onUpdate={entries => console.log(Object.fromEntries(entries))}
                error={true}
              />
            </Control>
          `} />
        </div>
        <div style={{ display: tab === 1 ? 'block' : 'none' }}>
          <h2>Components</h2>
          <div style={{ padding: '10px 0', marginTop: '40px' }}>
            <Loader color="#006699" show={true} label="Loading..." />
          </div>
          <PrettyCode code={`
            import Loader from 'frui-react/Loader'

            <Loader color="#006699" show={true} label="Loading..." />
          `} />
          <h3>Extra Small Buttons</h3>
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Button xs>Button XS</Button>
            <Button xs curved success>Button 1</Button>
            <Button xs rounded warning>Button 2</Button>
            <Button xs pill danger>Button 3</Button>
            <Button xs info>Button 4</Button>
            <Button xs muted>Button 5</Button>
      
            <Button xs outline success>Button 6</Button>
            <Button xs outline warning>Button 7</Button>
            <Button xs curved outline danger>Button 8</Button>
            <Button xs rounded outline info>Button 9</Button>
            <Button xs pill outline muted>Button 10</Button>
      
            <Button xs rounded transparent success>Button 11</Button>
            <Button xs pill transparent warning>Button 12</Button>
            <Button xs curved transparent danger>Button 13</Button>
            <Button xs transparent info>Button 14</Button>
            <Button xs transparent muted>Button 15</Button>
          </div>
          <PrettyCode code={`
            import Button from 'frui-react/Button'
            
            <Button xs>Button XS</Button>
            <Button xs curved success>Button 1</Button>
            <Button xs rounded warning>Button 2</Button>
            <Button xs pill danger>Button 3</Button>
            <Button xs info>Button 4</Button>
            <Button xs muted>Button 5</Button>
      
            <Button xs outline success>Button 6</Button>
            <Button xs outline warning>Button 7</Button>
            <Button xs curved outline danger>Button 8</Button>
            <Button xs rounded outline info>Button 9</Button>
            <Button xs pill outline muted>Button 10</Button>
      
            <Button xs rounded transparent success>Button 11</Button>
            <Button xs pill transparent warning>Button 12</Button>
            <Button xs curved transparent danger>Button 13</Button>
            <Button xs transparent info>Button 14</Button>
            <Button xs transparent muted>Button 15</Button>
          `} />
          <h3>Small Buttons</h3>
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Button sm>Button SM</Button>
            <Button rounded sm success>Button 1</Button>
            <Button pill sm warning>Button 2</Button>
            <Button curved sm danger>Button 3</Button>
            <Button sm info>Button 4</Button>
            <Button sm muted>Button 5</Button>
      
            <Button sm outline success>Button 6</Button>
            <Button curved sm outline warning>Button 7</Button>
            <Button rounded sm outline danger>Button 8</Button>
            <Button pill sm outline info>Button 9</Button>
            <Button sm outline muted>Button 10</Button>
      
            <Button sm transparent success>Button 11</Button>
            <Button sm transparent warning>Button 12</Button>
            <Button sm transparent danger>Button 13</Button>
            <Button rounded sm transparent info>Button 14</Button>
            <Button pill sm transparent muted>Button 15</Button>
          </div>
          <PrettyCode code={`
            <Button sm>Button SM</Button>
            <Button rounded sm success>Button 1</Button>
            <Button pill sm warning>Button 2</Button>
            <Button curved sm danger>Button 3</Button>
            <Button sm info>Button 4</Button>
            <Button sm muted>Button 5</Button>
      
            <Button sm outline success>Button 6</Button>
            <Button curved sm outline warning>Button 7</Button>
            <Button rounded sm outline danger>Button 8</Button>
            <Button pill sm outline info>Button 9</Button>
            <Button sm outline muted>Button 10</Button>
      
            <Button sm transparent success>Button 11</Button>
            <Button sm transparent warning>Button 12</Button>
            <Button sm transparent danger>Button 13</Button>
            <Button rounded sm transparent info>Button 14</Button>
            <Button pill sm transparent muted>Button 15</Button>
          `} />
          <h3>Medium Buttons</h3>
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Button md>Button MD</Button>
            <Button rounded md success>Button 1</Button>
            <Button pill md warning>Button 2</Button>
            <Button curved md danger>Button 3</Button>
            <Button md info>Button 4</Button>
            <Button md muted>Button 5</Button>
      
            <Button md outline color="#006699">Button 5.5</Button>
            <Button md outline success>Button 6</Button>
            <Button curved md outline warning>Button 7</Button>
            <Button rounded md outline danger>Button 8</Button>
            <Button pill md outline info>Button 9</Button>
            <Button md outline muted>Button 10</Button>
      
            <Button md transparent success>Button 11</Button>
            <Button md transparent warning>Button 12</Button>
            <Button curved md transparent danger>Button 13</Button>
            <Button rounded md transparent info>Button 14</Button>
            <Button pill md transparent muted>Button 15</Button>
          </div>
          <PrettyCode code={`
            <Button md>Button MD</Button>
            <Button rounded md success>Button 1</Button>
            <Button pill md warning>Button 2</Button>
            <Button curved md danger>Button 3</Button>
            <Button md info>Button 4</Button>
            <Button md muted>Button 5</Button>
      
            <Button md outline color="#006699">Button 5.5</Button>
            <Button md outline success>Button 6</Button>
            <Button curved md outline warning>Button 7</Button>
            <Button rounded md outline danger>Button 8</Button>
            <Button pill md outline info>Button 9</Button>
            <Button md outline muted>Button 10</Button>
      
            <Button md transparent success>Button 11</Button>
            <Button md transparent warning>Button 12</Button>
            <Button curved md transparent danger>Button 13</Button>
            <Button rounded md transparent info>Button 14</Button>
            <Button pill md transparent muted>Button 15</Button>
          `} />
          <h3>Large Buttons</h3>
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Button lg>Button LG</Button>
            <Button rounded lg success>Button 1</Button>
            <Button pill lg warning>Button 2</Button>
            <Button curved lg danger>Button 3</Button>
            <Button lg info>Button 4</Button>
            <Button lg muted>Button 5</Button>
      
            <Button lg outline success>Button 6</Button>
            <Button curved lg outline warning>Button 7</Button>
            <Button rounded lg outline danger>Button 8</Button>
            <Button pill lg outline info>Button 9</Button>
            <Button lg outline muted>Button 10</Button>
      
            <Button lg transparent success>Button 11</Button>
            <Button lg transparent warning>Button 12</Button>
            <Button curved lg transparent danger>Button 13</Button>
            <Button rounded lg transparent info>Button 14</Button>
            <Button pill lg transparent muted>Button 15</Button>
          </div>
          <PrettyCode code={`
            <Button lg>Button LG</Button>
            <Button rounded lg success>Button 1</Button>
            <Button pill lg warning>Button 2</Button>
            <Button curved lg danger>Button 3</Button>
            <Button lg info>Button 4</Button>
            <Button lg muted>Button 5</Button>
      
            <Button lg outline success>Button 6</Button>
            <Button curved lg outline warning>Button 7</Button>
            <Button rounded lg outline danger>Button 8</Button>
            <Button pill lg outline info>Button 9</Button>
            <Button lg outline muted>Button 10</Button>
      
            <Button lg transparent success>Button 11</Button>
            <Button lg transparent warning>Button 12</Button>
            <Button curved lg transparent danger>Button 13</Button>
            <Button rounded lg transparent info>Button 14</Button>
            <Button pill lg transparent muted>Button 15</Button>
          `} />
          <h3>Extra Large Buttons</h3>
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Button xl>Button XL</Button>
            <Button rounded xl success>Button 1</Button>
            <Button pill xl warning>Button 2</Button>
            <Button curved xl danger>Button 3</Button>
            <Button xl info>Button 4</Button>
            <Button xl muted>Button 5</Button>
      
            <Button xl outline success>Button 6</Button>
            <Button curved xl outline warning>Button 7</Button>
            <Button rounded xl outline danger>Button 8</Button>
            <Button pill xl outline info>Button 9</Button>
            <Button xl outline muted>Button 10</Button>
      
            <Button xl transparent success>Button 11</Button>
            <Button xl transparent warning>Button 12</Button>
            <Button curved xl transparent danger>Button 13</Button>
            <Button rounded xl transparent info>Button 14</Button>
            <Button pill xl transparent muted>Button 15</Button>
          </div>
          <PrettyCode code={`
            <Button xl>Button XL</Button>
            <Button rounded xl success>Button 1</Button>
            <Button pill xl warning>Button 2</Button>
            <Button curved xl danger>Button 3</Button>
            <Button xl info>Button 4</Button>
            <Button xl muted>Button 5</Button>
      
            <Button xl outline success>Button 6</Button>
            <Button curved xl outline warning>Button 7</Button>
            <Button rounded xl outline danger>Button 8</Button>
            <Button pill xl outline info>Button 9</Button>
            <Button xl outline muted>Button 10</Button>
      
            <Button xl transparent success>Button 11</Button>
            <Button xl transparent warning>Button 12</Button>
            <Button curved xl transparent danger>Button 13</Button>
            <Button rounded xl transparent info>Button 14</Button>
            <Button pill xl transparent muted>Button 15</Button>
          `} />
          <h3>Alerts</h3>
          <div style={{ padding: '10px 0', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '10px' }}>
            <Alert success>
              <i className="fas fa-check-circle mr-2"></i>
              Alert 1
            </Alert>
            <Alert warning curved>
              <i className="fas fa-exclamation-circle mr-2"></i>
              Alert 2
            </Alert>
            <Alert error rounded>
              <i className="fas fa-times-circle mr-2"></i>
              Alert 3
            </Alert>
            <Alert info pill>
              <i className="fas fa-info-circle mr-2"></i>
              Alert 4
            </Alert>
            <Alert muted>Alert 5</Alert>
            <Alert color="#006699">Alert 6</Alert>
          </div>
          <PrettyCode code={`
            import Alert from 'frui-react/Alert'
            
            <Alert success>Alert 1</Alert>
            <Alert warning curved>Alert 2</Alert>
            <Alert error rounded>Alert 3</Alert>
            <Alert info pill>Alert 4</Alert>
            <Alert muted>Alert 5</Alert>
            <Alert color="#006699">Alert 6</Alert>
          `} />
          <div style={{ padding: '10px 0', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '10px' }}>
            <Alert outline success>
              <i className="fas fa-check-circle mr-2"></i>
              Alert 1
            </Alert>
            <Alert outline curved warning>
              <i className="fas fa-exclamation-circle mr-2"></i>
              Alert 2
            </Alert>
            <Alert outline rounded error>
              <i className="fas fa-times-circle mr-2"></i>
              Alert 3
            </Alert>
            <Alert outline pill info>
              <i className="fas fa-info-circle mr-2"></i>
              Alert 4
            </Alert>
            <Alert outline muted>Alert 5</Alert>
            <Alert outline color="#006699">Alert 6</Alert>
          </div>
          <PrettyCode code={`
            <Alert outline success>Alert 1</Alert>
            <Alert outline warning curved>Alert 2</Alert>
            <Alert outline error rounded>Alert 3</Alert>
            <Alert outline info pill>Alert 4</Alert>
            <Alert outline muted>Alert 5</Alert>
            <Alert outline color="#006699">Alert 6</Alert>
          `} />
          <h3>Badges</h3>
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Badge success>Badge 1</Badge>
            <Badge warning curved>Badge 2</Badge>
            <Badge error rounded>Badge 3</Badge>
            <Badge info pill>Badge 4</Badge>
            <Badge muted>Badge 5</Badge>
            <Badge color="#006699">Badge 6</Badge>
          </div>
          <PrettyCode code={`
            import Badge from 'frui-react/Badge'
            
            <Badge success>Badge 1</Badge>
            <Badge warning curved>Badge 2</Badge>
            <Badge error rounded>Badge 3</Badge>
            <Badge info pill>Badge 4</Badge>
            <Badge muted>Badge 5</Badge>
            <Badge color="#006699">Badge 6</Badge>
          `} />
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Badge outline success>Badge 1</Badge>
            <Badge outline curved warning>Badge 2</Badge>
            <Badge outline rounded error>Badge 3</Badge>
            <Badge outline pill info>Badge 4</Badge>
            <Badge outline muted>Badge 5</Badge>
            <Badge outline color="#006699">Badge 6</Badge>
          </div>
          <PrettyCode code={`
            <Badge outline success>Badge 1</Badge>
            <Badge outline curved warning>Badge 2</Badge>
            <Badge outline rounded error>Badge 3</Badge>
            <Badge outline pill info>Badge 4</Badge>
            <Badge outline muted>Badge 5</Badge>
            <Badge outline color="#006699">Badge 6</Badge>
          `} />
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Badge success>9</Badge>
            <Badge warning curved>99</Badge>
            <Badge error rounded>999</Badge>
            <Badge info pill>9,999</Badge>
            <Badge muted>9M</Badge>
          </div>
          <PrettyCode code={`
            <Badge success>9</Badge>
            <Badge warning curved>99</Badge>
            <Badge error rounded>999</Badge>
            <Badge info pill>9,999</Badge>
            <Badge muted>9M</Badge>
          `} />
          <div style={{ padding: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Badge outline success>9</Badge>
            <Badge outline curved warning>99</Badge>
            <Badge outline rounded error>999</Badge>
            <Badge outline pill info>9,999</Badge>
            <Badge outline muted>9M</Badge>
          </div>
          <PrettyCode code={`
            <Badge outline success>9</Badge>
            <Badge outline curved warning>99</Badge>
            <Badge outline rounded error>999</Badge>
            <Badge outline pill info>9,999</Badge>
            <Badge outline muted>9M</Badge>
          `} />
          <Table>
            <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyLeft stickyTop>Header 1</Thead>
            <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 2</Thead>
            <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 3</Thead>
            <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 4</Thead>
            <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 5</Thead>
            <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 6</Thead>
            <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop stickyRight>Header 7</Thead>
            <Trow>
              <Tcol stickyLeft style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>1</Tcol>
              <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
              <Tcol wrap3 style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
              <Tcol noWrap style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
              <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
              <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
              <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }} stickyRight>Edit</Tcol>
            </Trow>
            <Tgroup>
              <Trow>
                <Tcol stickyLeft style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>2</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }} wrap3>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }} noWrap>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>A column Data</Tcol>
                <Tcol stickyRight style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>Edit</Tcol>
              </Trow>
              <Trow>
                <Tcol stickyLeft style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>3</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }} wrap3>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }} noWrap>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol stickyRight style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>Edit</Tcol>
              </Trow>
            </Tgroup>
            <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom stickyLeft>Footer 1</Tfoot>
            <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 2</Tfoot>
            <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 3</Tfoot>
            <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 4</Tfoot>
            <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 5</Tfoot>
            <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 6</Tfoot>
            <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom stickyRight>Footer 7</Tfoot>
          </Table>
          <PrettyCode code={`
            import Table, { Thead, Trow, Tcol, Tfoot } from 'frui-react/Table'
            
            <Table>
              <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyLeft stickyTop>Header 1</Thead>
              <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 2</Thead>
              <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 3</Thead>
              <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 4</Thead>
              <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 5</Thead>
              <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop>Header 6</Thead>
              <Thead style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyTop stickyRight>Header 7</Thead>
              <Trow>
                <Tcol stickyLeft style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>1</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol wrap3 style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol noWrap style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }} stickyRight>Edit</Tcol>
              </Trow>
              <Trow>
                <Tcol stickyLeft style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>2</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }} wrap3>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }} noWrap>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>A column Data</Tcol>
                <Tcol stickyRight style={{ textAlign: 'left', backgroundColor: '#FCFCFC' }}>Edit</Tcol>
              </Trow>
              <Trow>
                <Tcol stickyLeft style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>3</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }} wrap3>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }} noWrap>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>A column Data</Tcol>
                <Tcol stickyRight style={{ textAlign: 'left', backgroundColor: '#EFEFEF' }}>Edit</Tcol>
              </Trow>
              <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom stickyLeft>Footer 1</Tfoot>
              <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 2</Tfoot>
              <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 3</Tfoot>
              <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 4</Tfoot>
              <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 5</Tfoot>
              <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom>Footer 6</Tfoot>
              <Tfoot style={{ textAlign: 'left', backgroundColor: '#CDCDCD' }} noWrap stickyBottom stickyRight>Footer 7</Tfoot>
            </Table>
          `} />
        </div>
        <div style={{ display: tab === 2 ? 'block' : 'none' }}>
          <h2>Formats</h2>
          <h3>Color Format</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatColor value="#D90000" lg />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatColor value="#D90000" text={false} />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatColor value="#D90000" box={false} />
            </div>
          </div>
          <PrettyCode code={`
            import Color from 'frui-react/formats/Color'
            
            <Color value="#D90000" lg />
            <Color value="#D90000" text={false} />
            <Color value="#D90000" box={false} />
          `} />
          <h3>Country Format</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatCountry value="PH" lg />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatCountry value="US" text={false} />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatCountry value="GB" flag={false} />
            </div>
          </div>
          <PrettyCode code={`
            import Country from 'frui-react/formats/Country'
            
            <Country value="PH" lg />
            <Country value="US" text={false} />
            <Country value="GB" flag={false} />
          `} />
          <h3>Currency Format</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatCurrency value="PHP" lg />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatCurrency value="USD" text={false} />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatCurrency value="USD" flag={false} />
            </div>
          </div>
          <PrettyCode code={`
            import Currency from 'frui-react/formats/Currency'
            
            <Currency value="PHP" lg />
            <Currency value="USD" text={false} />
            <Currency value="USD" flag={false} />
          `} />
          <h3>Date Format</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatDate value="Mon, 29 May 2023 05:03:22 GMT" />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatDate value="Mon, 29 May 2023 05:03:22 GMT" format="YYYY-MM-DD HH:MM:SS" />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatDate value="Mon, 29 May 2023 05:03:22 GMT" format="ago" />
            </div>
            <hr />
            <div style={{ margin: '10px 0' }}>
              <FormatDate value="Mon, 29 May 2023 05:03:22 GMT" format="a" />
            </div>
          </div>
          <PrettyCode code={`
            import DateFormat from 'frui-react/formats/Date'
            
            <DateFormat value="Mon, 29 May 2023 05:03:22 GMT" />
            <DateFormat value="Mon, 29 May 2023 05:03:22 GMT" format="YYYY-MM-DD HH:MM:SS" />
            <DateFormat value="Mon, 29 May 2023 05:03:22 GMT" format="ago" />
            <DateFormat value="Mon, 29 May 2023 05:03:22 GMT" format="a" />
          `} />
          <div>
            <h3>Email Format</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatEmail value="hi@mail.com" className="text-blue-600" />
            </div>
            <PrettyCode code={`
              import Email from 'frui-react/formats/Email'
            
              <Email value="hi@mail.com" className="text-blue-600" />
            `} />
            <h3>Formulas</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatFormula value="29" formula="{x} + {this} + {y}" data={{ x: 4, y: 5 }} />
            </div>
            <PrettyCode code={`
              import Formula from 'frui-react/formats/Formula'
            
              <Formula value="29" formula="{x} + {this} + {y}" data={{ x: 4, y: 5 }} />
            `} />
            <h3>HTML Format</h3>
            <div className="mt-4 w-">
              <FormatHTML value={`<h1 style="font-weight:bold">Hello</h1>`} />
            </div>
            <PrettyCode code={`
              import HTML from 'frui-react/formats/HTML'
            
              <HTML value={\`<h1 style="font-weight:bold">Hello</h1>\`} />
            `} />
            <h3>Image Format</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatImage width="50" value="https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-2.png" />
            </div>
            <PrettyCode code={`
              import Image from 'frui-react/formats/Image'
            
              <Image width="50" value="https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-2.png" />
            `} />
            <h3>Image List</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatImagelist style={{ maxHeight: '50px' }} value={[
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-long.png',
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png',
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-2.png',
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-3.png'
              ]} />
            </div>
            <PrettyCode code={`
              import Imagelist from 'frui-react/formats/Imagelist'
            
              <Imagelist style={{ maxHeight: '50px' }} value={[
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-long.png',
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-1.png',
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-2.png',
                'https://raw.githubusercontent.com/inceptjs/incept.js/main/docs/assets/incept-logo-square-3.png'
              ]} />
            `} />
            <h3>JSON Format</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatJSON value={{ foo: 'bar', bar: 'foo'}} />
            </div>
            <PrettyCode code={`
              import JSONFormat from 'frui-react/formats/JSON'
            
              <JSONFormat value={{ foo: 'bar', bar: 'foo'}} />
            `} />
            <h3>Link Format</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatLink value="https://www.incept.asia/" className="text-blue-600" />
            </div>
            <PrettyCode code={`
              import Link from 'frui-react/formats/Link'
            
              <Link value="https://www.incept.asia/" className="text-blue-600" />
            `} />
            <h3>Unordered List</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatList value={[ 'one', 'two', 'three' ]} />
            </div>
            <PrettyCode code={`
              import List from 'frui-react/formats/List'
            
              <List value={[ 'one', 'two', 'three' ]} />
            `} />
            <h3>Ordered List</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatList value={[ 'one', 'two', 'three' ]} ordered />
            </div>
            <PrettyCode code={`
              <List value={[ 'one', 'two', 'three' ]} ordered />
            `} />
            <h3>From Markdown to HTML</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatMarkdown value="A paragraph with *emphasis* and **strong importance**" />
            </div>
            <PrettyCode code={`
              import Markdown from 'frui-react/formats/Markdown'
            
              <Markdown value="A paragraph with *emphasis* and **strong importance**" />
            `} />
            <h3>Metadata Format</h3>
            <div style={{ margin: '10px 0' }}>
              <FormatMetadata value={{ foo: 'bar', 'very very long': 'foo'}} />
            </div>
            <PrettyCode code={`
              import Metadata from 'frui-react/formats/Metadata'
            
              <Metadata value={{ foo: 'bar', 'very very long': 'foo'}} />
            `} />
          </div>
          <h3>Number Formats</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatNumber value="-1234567890.0987654321" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatNumber value="-1234567890.0987654321" separator="," decimals={2} absolute={true} />
            </div>
          </div>
          <PrettyCode code={`
            import NumberFormat from 'frui-react/formats/Number'
            
            <NumberFormat value="-1234567890.0987654321" />
            <NumberFormat value="-1234567890.0987654321" separator="," decimals={2} absolute={true} />
          `} />
          <h3>Text Overflows</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" words />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" length={4} />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" length={4} words />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" hellip />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" words hellip />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" length={4} hellip />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatOverflow value="a Long walk On the Beach" length={4} words hellip />
            </div>
          </div>
          <PrettyCode code={`
            import Overflow from 'frui-react/formats/Overflow'
            
            <Overflow value="a Long walk On the Beach" />
            <Overflow value="a Long walk On the Beach" words />
            <Overflow value="a Long walk On the Beach" length={4} />
            <Overflow value="a Long walk On the Beach" length={4} words />
            <Overflow value="a Long walk On the Beach" hellip />
            <Overflow value="a Long walk On the Beach" words hellip />
            <Overflow value="a Long walk On the Beach" length={4} hellip />
            <Overflow value="a Long walk On the Beach" length={4} words hellip />
          `} />
          <h3>Ratings</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatRating value="6.0987654321" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatRating value="5" max={10} />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatRating value="5" max={10} remainder={true} />
            </div>
          </div>
          <PrettyCode code={`
            import Rating from 'frui-react/formats/Rating'
            
            <Rating value="6.0987654321" />
            <Rating value="5" max={10} />
            <Rating value="5" max={10} remainder={true} />
          `} />
          <h3>Array Separations</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatSeparated value={[ 'one', 'two', 'three' ]} />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatSeparated value={[ 'one', 'two', 'three' ]} separator=", " />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatSeparated className="leading-7" value={[ 'one', 'two', 'three' ]} separator="line" />
            </div>
          </div>
          <PrettyCode code={`
            import Separated from 'frui-react/formats/Separated'
            
            <Separated value={[ 'one', 'two', 'three' ]} />
            <Separated value={[ 'one', 'two', 'three' ]} separator=", " />
            <Separated className="leading-7" value={[ 'one', 'two', 'three' ]} separator="line" />
          `} />
          <h3>Table Format</h3>
          <div>
            <FormatTable 
              value={[{ Foo: 'bar', Bar: 'foo' }, { foo: 'bar', bar: 'foo' }]} 
              stripes={[['#999999', 'white'], ['white', 'black'], ['#EFEFEF', 'black']]}
            />
            <PrettyCode code={`
              import Table from 'frui-react/formats/Table'
            
              <Table 
                value={[{ Foo: 'bar', Bar: 'foo' }, { foo: 'bar', bar: 'foo' }]} 
                stripes={[['#999999', 'white'], ['white', 'black'], ['#EFEFEF', 'black']]}
              />
            `} />
            <h3>Taglists</h3>
            <FormatTaglist pill value={['foo', 'long bar', 'baz']} />
            <FormatTaglist pill error value={['foo', 'long bar', 'baz']} />
            <PrettyCode code={`
              import Taglist from 'frui-react/formats/Taglist'
            
              <Taglist pill value={['foo', 'long bar', 'baz']} />
              <Taglist pill error value={['foo', 'long bar', 'baz']} />
            `} />
          </div>
          <h3>Text Transformations</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatText value="a Long walk On the Beach" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatText value="a Long walk On the Beach" format="capitalize" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatText value="a Long walk On the Beach" format="uppercase" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatText value="a Long walk On the Beach" format="lowercase" />
            </div>
          </div>
          <PrettyCode code={`
            import Text from 'frui-react/formats/Text'
            
            <Text value="a Long walk On the Beach" />
            <Text value="a Long walk On the Beach" format="capitalize" />
            <Text value="a Long walk On the Beach" format="uppercase" />
            <Text value="a Long walk On the Beach" format="lowercase" />
          `} />
          <h3>Boolean Formats</h3>
          <div>
            <div style={{ margin: '10px 0' }}>
              <FormatYesno value="1" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatYesno value="" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatYesno value="1" yes="oui" no="niet" />
            </div>
            <div style={{ margin: '10px 0' }}>
              <FormatYesno value={0} yes="oui" no="niet" />
            </div>
          </div>
          <PrettyCode code={`
            import Yesno from 'frui-react/formats/Yesno'
            
            <Yesno value="1" />
            <Yesno value="" />
            <Yesno value="1" yes="oui" no="niet" />
            <Yesno value={0} yes="oui" no="niet" />
          `} />
        </div>
      </main>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
