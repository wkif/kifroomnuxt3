import { format, parseISO } from "date-fns";
import { md5 } from "js-md5";

export function formattedDate(date: string) {
  if (!date) return "";
  const dateObject = parseISO(date);
  const formattedResult = format(dateObject, "yyyy/MM/dd");
  return formattedResult;
}

export function insertYearToPosts(posts: any) {
  let currentYear = -1;
  return posts.reduce((posts: any, post: any) => {
    const year = new Date(post.date).getFullYear();
    if (year !== currentYear && !isNaN(year)) {
      posts.push({
        isMarked: true,
        year,
      });
      currentYear = year;
    }
    posts.push(post);
    return posts;
  }, []);
}

export async function getIncludedYearPosts(dirName: string) {
  const result = await queryContent(dirName).sort({ date: -1 }).find();
  result.forEach((post: any) => {
    if (post.password) {
      post.body = {};
      post.password = true;
      post.description = "";
    }
  });
  return insertYearToPosts(result);
}

export async function checkoutPass(password: string, path: string) {
  const post = await queryContent(path).only(["password"]).findOne();
  if (!post) return false;
  const hashedData = md5(password);
  return hashedData === post.password;
}

export async function ifLock(path: string) {
  const post = await queryContent(path).only(["password"]).findOne();
  if (!post) return false;
  if (post.password) {
    return true;
  } else {
    return false;
  }
}
