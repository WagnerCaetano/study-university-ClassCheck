import React, { ErrorInfo, ReactNode } from 'react';
import { Text } from 'react-native';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Log the error or perform any necessary actions
        console.log('Error:', error);
        console.log('Error Info:', info);

        // Update state to display an error message
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // Render a fallback UI when an error occurs
            return <Text>Something went wrong. Please try again.</Text>;
        }

        return this.props.children;
    }
}
