<html>
<head>
<title>Random trying</title>
<body>
<h4>List</h4>
<table border=1>
<g:each in="${things}" status="i" var="thisthing" >
   <tr>
        <td>${thisthing.name}</td>
        <td>${thisthing.points}</td>
   </tr>
 </g:each>

</table>
</body>
</html>