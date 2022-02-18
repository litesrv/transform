import ConversionPanel from "@components/ConversionPanel";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";
import { useCallback } from "react";
import * as React from "react";

interface Settings {
  compress: boolean;
}

const formFields = [
  {
    type: InputType.SWITCH,
    key: "compress",
    label: "Compress Json"
  }
];

export default function JsonToFormatter() {
  const name = "BEAUTIFUL JSON";

  const [settings, setSettings] = useSettings(name, {
    compress: false
  });

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<Settings>
          title={name}
          onSubmit={setSettings}
          open={open}
          toggle={toggle}
          formsFields={formFields}
          initialValues={settings}
        />
      );
    },
    []
  );

  const transformer = useCallback(
    ({ value }) => {
      return prettifyJson(value);
    },
    [settings]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="格式化JSON"
      resultLanguage={"json"}
      editorSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}

export async function prettifyJson(value: string) {
  return JSON.stringify(JSON.parse(value), null, 1);
}
