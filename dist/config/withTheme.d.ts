import React from 'react';
export interface ThemedComponent {
    displayName: string;
}
declare function withTheme<P = {}>(WrappedComponent: React.ComponentType<P>, themeKey?: string): React.FunctionComponent<P> | React.ForwardRefExoticComponent<P>;
export default withTheme;
