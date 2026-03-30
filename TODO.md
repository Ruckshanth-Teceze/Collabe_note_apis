# Fix GET /openapi.json 500 Error

## Status: In Progress

### Steps:

- [x] **Step 1**: Edit `src/dto/note.dto.ts` - Remove `file: z.instanceof(File)` from `createNoteSchema` **(Already fixed)**
- [x] **Step 2**: Create `src/dto/file.dto.ts` with JSON metadata schema **(Skipped for now - json schema working)**
- [x] **Step 3**: Update `src/routes/note.route.ts` POST / to multipart/form-data **(Reverted to json for OpenAPI compat - multipart zod-openapi limited)**

**Current Step**: 6/7 - npm run build && test

- [ ] **Step 4**: Update `src/controllers/note.controller.ts` createNote to handle formData + file
- [ ] **Step 5**: Fix `src/services/file.service.ts` for real S3 upload
- [ ] **Step 6**: npm run build && restart server
- [ ] **Step 7**: Test curl http://localhost:4000/openapi.json
- [x] Diagnosed root cause (z.instanceof(File) breaks OpenAPI schema gen)

**Current Step**: 1/7
