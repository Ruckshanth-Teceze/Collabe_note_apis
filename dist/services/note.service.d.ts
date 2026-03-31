import { createNoteDto, updateNoteDto } from "../dto/note.dto.js";
export declare class NoteServices {
    noteCreate(userId: string, noteInput: createNoteDto): Promise<{
        userRole: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }>;
    noteUpdate(userId: string, noteId: string, noteInput: updateNoteDto): Promise<{
        userRole: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }>;
    noteGetById(userId: string, noteId: string): Promise<{
        userRole: "OWNER" | "EDITOR" | "VIEWER";
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }>;
    noteGets(userId: string): Promise<{
        [n: number]: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
        length: number;
        toString(): string;
        toLocaleString(): string;
        toLocaleString(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
        pop(): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        } | undefined;
        push(...items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]): number;
        concat(...items: ConcatArray<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }>[]): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        concat(...items: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        } | ConcatArray<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }>)[]): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        join(separator?: string): string;
        reverse(): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        shift(): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        } | undefined;
        slice(start?: number, end?: number): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        sort(compareFn?: ((a: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, b: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }) => number) | undefined): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        splice(start: number, deleteCount?: number): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        splice(start: number, deleteCount: number, ...items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        unshift(...items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]): number;
        indexOf(searchElement: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, fromIndex?: number): number;
        lastIndexOf(searchElement: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, fromIndex?: number): number;
        every<S extends {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }>(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => U, thisArg?: any): U[];
        filter<S extends {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }>(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => value is S, thisArg?: any): S[];
        filter(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => unknown, thisArg?: any): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        reduce(callbackfn: (previousValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentIndex: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
        reduce(callbackfn: (previousValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentIndex: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, initialValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
        reduce<U>(callbackfn: (previousValue: U, currentValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentIndex: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => U, initialValue: U): U;
        reduceRight(callbackfn: (previousValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentIndex: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
        reduceRight(callbackfn: (previousValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentIndex: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, initialValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, currentIndex: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => U, initialValue: U): U;
        find<S extends {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }>(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, obj: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => value is S, thisArg?: any): S | undefined;
        find(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, obj: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => unknown, thisArg?: any): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        } | undefined;
        findIndex(predicate: (value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, obj: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => unknown, thisArg?: any): number;
        fill(value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, start?: number, end?: number): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        copyWithin(target: number, start: number, end?: number): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
        entries(): ArrayIterator<[number, {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }]>;
        keys(): ArrayIterator<number>;
        values(): ArrayIterator<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }>;
        includes(searchElement: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, fromIndex?: number): boolean;
        flatMap<U, This = undefined>(callback: (this: This, value: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }, index: number, array: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[]) => U | readonly U[], thisArg?: This | undefined): U[];
        flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
        at(index: number): {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        } | undefined;
        [Symbol.iterator](): ArrayIterator<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }>;
        [Symbol.unscopables]: {
            [x: number]: boolean | undefined;
            length?: boolean | undefined;
            toString?: boolean | undefined;
            toLocaleString?: boolean | undefined;
            pop?: boolean | undefined;
            push?: boolean | undefined;
            concat?: boolean | undefined;
            join?: boolean | undefined;
            reverse?: boolean | undefined;
            shift?: boolean | undefined;
            slice?: boolean | undefined;
            sort?: boolean | undefined;
            splice?: boolean | undefined;
            unshift?: boolean | undefined;
            indexOf?: boolean | undefined;
            lastIndexOf?: boolean | undefined;
            every?: boolean | undefined;
            some?: boolean | undefined;
            forEach?: boolean | undefined;
            map?: boolean | undefined;
            filter?: boolean | undefined;
            reduce?: boolean | undefined;
            reduceRight?: boolean | undefined;
            find?: boolean | undefined;
            findIndex?: boolean | undefined;
            fill?: boolean | undefined;
            copyWithin?: boolean | undefined;
            entries?: boolean | undefined;
            keys?: boolean | undefined;
            values?: boolean | undefined;
            includes?: boolean | undefined;
            flatMap?: boolean | undefined;
            flat?: boolean | undefined;
            at?: boolean | undefined;
            [Symbol.iterator]?: boolean | undefined;
            readonly [Symbol.unscopables]?: boolean | undefined;
        };
    }>;
    noteDelete(userId: string, noteId: string): Promise<{
        message: string;
        userRole: "OWNER";
    }>;
}
export declare const noteServices: NoteServices;
//# sourceMappingURL=note.service.d.ts.map