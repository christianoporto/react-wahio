import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages";
import { LOCALES } from "./locales";
import flatten from "flat";

interface IProviderProps {
    children: any;
    locale?: string;
}

const Provider = ({ children, locale = LOCALES.SPANISH }: IProviderProps) => (
    <IntlProvider locale={locale} textComponent={Fragment} messages={flatten(messages[locale])}>
        {children}
    </IntlProvider>
);

export default Provider;
