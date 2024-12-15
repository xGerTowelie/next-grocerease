import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { months } from "@/constants"
import { RevalidationPaths } from "./supabase/complex_types";
import { revalidatePath } from "next/cache";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getURL = (path: string = '') => {
    let url = process.env.NEXT_PUBLIC_SITE_URL

    if (!url) {
        throw new Error("NEXT_PUBLIC_SITE_URL, isn't set in the .env")
    }

    // Trim the URL and remove trailing slash if exists.
    url = url.replace(/\/+$/, '');

    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;

    // Ensure path starts without a slash to avoid double slashes in the final URL.
    path = path.replace(/^\/+/, '');

    // Concatenate the URL and the path.
    return path ? `${url}/${path}` : url;
};

export const toDateTime = (secs: number) => {
    const t = new Date(+0); // Unix epoch start.
    t.setSeconds(secs);
    return t;
};

export const calculateTrialEndUnixTimestamp = (
    trialPeriodDays: number | null | undefined
) => {
    // Check if trialPeriodDays is null, undefined, or less than 2 days
    if (
        trialPeriodDays === null ||
        trialPeriodDays === undefined ||
        trialPeriodDays < 2
    ) {
        return undefined;
    }

    const currentDate = new Date(); // Current date and time
    const trialEnd = new Date(
        currentDate.getTime() + (trialPeriodDays + 1) * 24 * 60 * 60 * 1000
    ); // Add trial days
    return Math.floor(trialEnd.getTime() / 1000); // Convert to Unix timestamp in seconds
};

const toastKeyMap: { [key: string]: string[] } = {
    status: ['status', 'status_description'],
    error: ['error', 'error_description']
};

const getToastRedirect = (
    path: string,
    toastType: string,
    toastName: string,
    toastDescription: string = '',
    disableButton: boolean = false,
    arbitraryParams: string = ''
): string => {
    const [nameKey, descriptionKey] = toastKeyMap[toastType];

    let redirectPath = `${path}?${nameKey}=${encodeURIComponent(toastName)}`;

    if (toastDescription) {
        redirectPath += `&${descriptionKey}=${encodeURIComponent(toastDescription)}`;
    }

    if (disableButton) {
        redirectPath += `&disable_button=true`;
    }

    if (arbitraryParams) {
        redirectPath += `&${arbitraryParams}`;
    }

    return redirectPath;
};

export const getStatusRedirect = (
    path: string,
    statusName: string,
    statusDescription: string = '',
    disableButton: boolean = false,
    arbitraryParams: string = ''
) =>
    getToastRedirect(
        path,
        'status',
        statusName,
        statusDescription,
        disableButton,
        arbitraryParams
    );

export const getErrorRedirect = (
    path: string,
    errorName: string,
    errorDescription: string = '',
    disableButton: boolean = false,
    arbitraryParams: string = ''
) =>
    getToastRedirect(
        path,
        'error',
        errorName,
        errorDescription,
        disableButton,
        arbitraryParams
    );



export function getMonthOptions() {
    return months.map((month, index) => ({
        value: index.toString(),
        label: month
    }));
}

// date -> string for the ui in german time
export function displayDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export function expenseDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
    })
}

// date -> string for postgres date type
export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}


export function revalidateAll(paths: RevalidationPaths) {
    if (!paths) return

    if (Array.isArray(paths)) {
        paths.forEach(path => revalidatePath(path))
    } else {
        revalidatePath(paths)
    }
}
