Bu taskın məqsədi verilmiş URL-dən məlumat alaraq həmin datanı Redux-da saxlamaq və ekranda tələb olunan dizayna uyğun olaraq dinamik şəkildə göstərməkdir. Aşağıda taskın detalları və addım-addım icrası izah olunub.


1. **URL-dən Məlumatın Alınması**:

   - Verilmiş URL-ə sorğu göndərilib və məlumatı alınıb.(`http://localhost:5000/menu.json`)
   - Alınan məlumat Redux storunda saxlanılıb.

2. **Kateqoriyaların Dinamik Göstərilməsi**:

   - Məlumat əsasında kateqoriyalar dinamik olaraq ekranda göstərilib.
   - Keteqoriyalar ve məhsullar `isArchived` görə filter olunub.
   - Hər bir kateqoriya kliklənə bilən bir düymə və ya tab kimi təqdim olunub.

3. **Məhsulların Kateqoriya Üzrə Göstərilməsi**:

   - Hər hansı bir kateqoriyaya klik etdikdə, yalnız həmin kateqoriyanın məhsulları göstərilir.
   - "All" (Hamısı) seçildikdə, bütün kateqoriyaların məhsulları başlıqları ilə birlikdə göstərilir.

4. **Məhsulun Kliklə Modaldə Açılması**:
   - Hər hansı bir məhsula klik etdikdə, həmin məhsulun detalları ilə bağlı modal pəncərə açılır.

## İstifadə Olunan Texnologiyalar

- Redux Toolkit
- SCSS
