export default function callServer(fn: Function = () => null): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(fn()), 500));
}
