import React, { Fragment, useContext } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages";
import flatten from "flat";
import { AppSettingsContext } from "../appSettings/AppSettingsContext";

interface IProviderProps {
    children: React.ReactNode;
}

const Provider = ({ children }: IProviderProps) => {
    const { appSettingsState } = useContext(AppSettingsContext);
    const locale = appSettingsState.language;
    return (
        <IntlProvider locale={locale} textComponent={Fragment} messages={flatten(messages[locale])}>
            {children}
        </IntlProvider>
    );
};

export default Provider;
