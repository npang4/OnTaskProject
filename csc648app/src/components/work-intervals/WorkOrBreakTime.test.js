import React from 'react';
import WorkOrBreak from './WorkOrBreakTimers';
import SetTimers from './SetTimers';
import {render, screen, fireEvent} from '@testing-library/react';

describe('Set timers', () => {

    //check to see if the component renders
    test('Render timer', () => {
        render(<SetTimers/>);
        const workMin = document.getElementById("work-min");
        const workSec = document.getElementById("work-sec");
        const breakMin = document.getElementById("break-min");
        const breakSec = document.getElementById("break-sec");
        expect(workMin).toBeInTheDocument();
        expect(workSec).toBeInTheDocument();
        expect(breakMin).toBeInTheDocument();
        expect(breakSec).toBeInTheDocument();
    })

    test('Set work minute to 60', () => {
        render(<SetTimers/>);
        const workMin = document.getElementById("work-min");
        fireEvent.change(workMin, {target: {value: '60'}})
        expect(document.getElementById("work-min").value).toEqual("60");
    })

    test('Set work second to 30', () => {
        render(<SetTimers/>);
        const mockChange = jest.fn();
        const workSec = document.getElementById("work-sec");
        fireEvent.change(workSec, {target: {value: '30'}})
        expect(document.getElementById("work-sec").value).toEqual("30");
    })

    test('Set break minute to 15', () => {
        render(<SetTimers/>);
        const mockChange = jest.fn();
        const breakMin = document.getElementById("break-min");
        fireEvent.change(breakMin, {target: {value: '15'}})
        expect(document.getElementById("break-min").value).toEqual("15");
    })

    test('Set break second to 30', () => {
        render(<SetTimers/>);
        const breakSec = document.getElementById("break-sec");
        fireEvent.change(breakSec, {target: {value: '30'}})
        expect(document.getElementById("break-sec").value).toEqual("30");
    })
})