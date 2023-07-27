export const formattedJapanDate = (currentDate: Date) => {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const dayOfWeek = currentDate.getDay();
    const dayNames: string[] = ['日', '月', '火', '水', '木', '金', '土'];
    const formattedDate = `${year}年${month}月${day}日(${dayNames[dayOfWeek]})`;
    return formattedDate as string;
}
