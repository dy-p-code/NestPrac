// READ : 고양이 전체 데이터 조회 API
import { Cat, CatType } from "./app.model";
import { Router } from "express";

const router = Router();

// READ : 전체 고양이 데이터 조회 API
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error'); // 에러 강제 발생
    res.status(200).send({ success: true, data: { cats } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// READ : 특정 고양이 데이터 조회 API
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({ success: true, data: { cats } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// CREATE : 새로운 고양이 데이터 추가 API
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({ success: true, data: { data } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// UPDATE (PUT) : 고양이 데이터 전체 업데이트 API
router.put("/cats/:id", (req, res) => {
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
});

// UPDATE (PATCH) : 고양이 데이터 부분 업데이트 API
router.put("/cats/:id", (req, res) => {
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
});

// DELETE : 고양이 데이터 삭제 API
router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;

    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({ success: true, data: { cat: newCat } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

export default router;
