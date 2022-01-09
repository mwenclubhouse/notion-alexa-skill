import {HandlerInput} from "ask-sdk-core";

interface NotionDatabaseItem {
}

export const parseItem = (handlerInput: HandlerInput): NotionDatabaseItem => {
    return {};
}

export const uploadItemToNotStarted = async (item: NotionDatabaseItem) => {
}

export const listNotStartedTasks = async (): Promise<NotionDatabaseItem[]> => {
    return [];
}

export const listInProgressTasks = async (): Promise<NotionDatabaseItem[]> => {
    return [];
}

export const listCompletedTodayTasks = async (): Promise<NotionDatabaseItem[]> => {
    return [];
}
