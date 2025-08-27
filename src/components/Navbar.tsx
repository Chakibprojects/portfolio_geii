@@ .. @@
         <div className="flex items-center justify-between h-16">
           <div className="flex-shrink-0">
-            <a href="#" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
-              𝓒
+            <a href="#" className="relative group">
+              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
+              <div className="relative text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 border-2 border-transparent group-hover:border-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300">
+                𝓒
+              </div>
             </a>
           </div>