import { driver } from '@wdio/globals'
import type { OcrWaitForTextDisplayedOptions } from '../types.js'
import ocrGetElementPositionByText from './ocrGetElementPositionByText.js'

export default async function ocrWaitForTextDisplayed(
    options: OcrWaitForTextDisplayedOptions
) {
    const { timeout, timeoutMsg } = options

    return driver.waitUntil(
        async () =>  ocrGetElementPositionByText(options),
        {
            timeout: timeout || 180000,
            timeoutMsg: timeoutMsg || `Could not find the text "${options.text}" within the requested time.`,
        }
    )
}
