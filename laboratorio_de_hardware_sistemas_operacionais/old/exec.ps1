$i = 0;

while ($i -lt 5) {
  $i += 1
  if ($i -eq 3) {
    continue
  }
  Write-Output $i
}
