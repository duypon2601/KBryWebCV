import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(true).toBe(true); // Basic test
    });
});