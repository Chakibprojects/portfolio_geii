@@ .. @@
       {/* Hero Section */}
       <section className="relative h-screen">
-        <div className="absolute inset-0 z-0">
-          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"></script>
-          <spline-viewer url="https://prod.spline.design/zSzgzQlSTUXySidh/scene.splinecode" className="w-full h-full"></spline-viewer>
-        </div>
+        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/20 to-green-900/20">
+          {/* Placeholder for 3D background */}
+          <div className="w-full h-full flex items-center justify-center opacity-10">
+            <div className="text-6xl">⚡</div>
+          </div>
+        </div>
         <div className="relative z-10 flex items-center justify-center h-full bg-gradient-to-b from-transparent to-[#0a0a0a]/90">
           <div className="text-center px-4">
             <motion.h1