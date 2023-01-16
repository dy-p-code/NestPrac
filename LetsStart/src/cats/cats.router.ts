import { Router } from "express";
import {
  readAllcat,
  readOnecat,
  readNewcat,
  allUpdatecat,
  partialUpdatecat,
  deleteCat,
} from "./cats.service";

const router = Router();

// READ : 전체 고양이 데이터 조회 API
router.get("/cats", readAllcat);

// READ : 특정 고양이 데이터 조회 API
router.get("/cats/:id", readOnecat);

// CREATE : 새로운 고양이 데이터 추가 API
router.post("/cats", readNewcat);

// UPDATE (PUT) : 고양이 데이터 전체 업데이트 API
router.put("/cats/:id", allUpdatecat);

// UPDATE (PATCH) : 고양이 데이터 부분 업데이트 API
router.put("/cats/:id", partialUpdatecat);

// DELETE : 고양이 데이터 삭제 API
router.put("/cats/:id", deleteCat);

export default router;
