// READ : 고양이 전체 데이터 조회 API
import { Request, Response } from "express";
import { Cat, CatType } from "./app.model";

// READ : 전체 고양이 데이터 조회 API
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error'); // 에러 강제 발생
    res.status(200).send({ success: true, data: { cats } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

// READ : 특정 고양이 데이터 조회 API
export const readOnecat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({ success: true, data: { cats } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

// CREATE : 새로운 고양이 데이터 추가 API
export const readNewcat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({ success: true, data: { data } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

// UPDATE (PUT) : 고양이 데이터 전체 업데이트 API
export const allUpdatecat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({ success: true, data: { cat: result } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

// UPDATE (PATCH) : 고양이 데이터 부분 업데이트 API
export const partialUpdatecat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body }; // 객체 구조 분해 할당
        result = cat;
      }
    });

    res.status(200).send({ success: true, data: { cat: result } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

// DELETE : 고양이 데이터 삭제 API
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;

    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({ success: true, data: { cat: newCat } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};
