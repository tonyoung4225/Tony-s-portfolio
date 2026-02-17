# 의존성(Dependency) 이슈 해결 방법

## 1. 기본: 동기화만 하기

`package.json`과 `node_modules`가 맞지 않을 때:

```powershell
cd "e:\1_DEV\cursor\project\portfolio"
npm install
```

---

## 2. 깨끗하게 다시 설치 (가장 확실)

디렉터리 복구 후, lock 파일과 `node_modules`가 꼬였을 때:

```powershell
cd "e:\1_DEV\cursor\project\portfolio"

# 1) node_modules 삭제
Remove-Item -Recurse -Force node_modules

# 2) lock 파일 삭제 (선택, 완전 초기화 시)
Remove-Item -Force package-lock.json

# 3) 다시 설치
npm install
```

- **package-lock.json까지 지우면**: 버전이 `package.json` 범위 안에서 다시 잡혀서, 다른 환경과 미세하게 달라질 수 있음.
- **node_modules만 지우고 lock은 유지**: 같은 버전으로 재설치되므로 보통 이걸로 충분함.

---

## 3. 캐시까지 비우고 설치

`npm install`이 계속 실패하거나 이상한 버전이 잡힐 때:

```powershell
npm cache clean --force
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 4. 자주 나오는 에러 대응

| 증상 | 대처 |
|------|------|
| `ERESOLVE unable to resolve dependency` | `npm install --legacy-peer-deps` |
| `EACCES` / 권한 오류 | 터미널을 **관리자 권한**으로 실행 후 다시 `npm install` |
| `node-gyp` / 네이티브 빌드 오류 | [Windows Build Tools](https://github.com/felixrieseberg/windows-build-tools) 또는 Visual Studio Build Tools 설치 |
| 특정 패키지 버전 충돌 | `package.json`에서 해당 패키지 버전을 한 단계 올리거나 `npm install 패키지@버전` |

---

## 5. 확인

설치 후 정상 여부 확인:

```powershell
npm run build
# 또는
npm run dev
```

둘 중 하나가 오류 없이 돌면 의존성은 정상입니다.
